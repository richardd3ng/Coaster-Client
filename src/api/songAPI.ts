import axios, { AxiosRequestConfig } from "axios";

import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";
import { SongInfoFragment } from "../gql/graphql";
import { formatError } from "./errorUtils";

const songByIdQueryDocument = graphql(`
    query SongById($id: MongoID!) {
        songById(_id: $id) {
            ...SongInfo
        }
    }
`);
/**
 * Fetches a song by id
 * @param id - The id of the song
 * @returns - The fetched song
 * @throws - An error if the request fails
 */
export const fetchSong = async (id: string) => {
    try {
        const response = await graphqlRequest<{
            songById: SongInfoFragment;
        }>(songByIdQueryDocument, { id });
        return response.songById;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song");
    }
};

const songCreateOrUpdateMutationDocument = graphql(`
    mutation SongCreateOrUpdate(
        $spotifyId: String!
        $uri: String!
        $name: String!
        $artists: [String!]!
        $albumUrl: String!
    ) {
        songCreateOrUpdate(
            spotifyId: $spotifyId
            uri: $uri
            name: $name
            artists: $artists
            albumUrl: $albumUrl
        ) {
            _id
        }
    }
`);
interface Song {
    spotifyId: string;
    uri: string;
    name: string;
    artists: string[];
    albumUrl: string;
}
/**
 * Creates or potentially updates a song in the database
 * @param song - Song details
 * @returns - The id of the created or possibly updated song
 * @throws - An error if the request fails
 */
export const createOrUpdateSong = async (song: Song): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            songCreateOrUpdate: { _id: string };
        }>(songCreateOrUpdateMutationDocument, {
            spotifyId: song.spotifyId,
            uri: song.uri,
            name: song.name,
            artists: song.artists,
            albumUrl: song.albumUrl,
        });
        return response.songCreateOrUpdate._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create or update song");
    }
};

/**
 * Retrieves recently played songs from Spotify for user with the provided access token
 * https://developer.spotify.com/documentation/web-api/reference/get-recently-played
 * @param limit - Maximum number of items to return (1 to 50, default is 50)
 * @param after - Unix timestamp in milliseconds to get items after this time
 * @returns - Recently played tracks response
 * @throws - An error if the request fails
 */
export const fetchRecentlyPlayedSongs = async (
    accessToken: string,
    limit: number = 50,
    after?: number
) => {
    const params: Record<string, any> = { limit };
    if (after) params.after = after;
    const config: AxiosRequestConfig = {
        method: "get",
        url: "https://api.spotify.com/v1/me/player/recently-played",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        params,
    };
    const response = await axios(config);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error("Error: unable to fetch recently played songs");
    }
};

const songByIdsQueryDocument = graphql(`
    query SongByIds($ids: [MongoID!]!) {
        songByIds(_ids: $ids) {
            spotifyId
        }
    }
`);
/**
 * Fetches Spotify IDs for the given song IDs
 * @param songIds - The ids of the songs to fetch Spotify IDs for
 * @returns - An array of Spotify IDs
 * @throws - An error if the request fails
 */
const fetchSpotifyIds = async (songIds: string[]): Promise<string[]> => {
    try {
        const response = await graphqlRequest<{
            songByIds: { spotifyId: string }[];
        }>(songByIdsQueryDocument, { ids: songIds });
        return response.songByIds.map((song) => song.spotifyId);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch Spotify IDs");
    }
};

/**
 * Creates a playlist in the user's Spotify account
 * @param name - The name of the playlist
 * @param description - The description of the playlist
 * @param accessToken - The user's Spotify access token
 * @returns - An object containing the Spotify ID and URI of the created playlist
 * @throws - An error if the request fails
 */
const createSpotifyPlaylist = async (
    name: string,
    description: string,
    accessToken: string
): Promise<{
    id: string;
    uri: string;
}> => {
    try {
        const config: AxiosRequestConfig = {
            method: "post",
            url: "https://api.spotify.com/v1/me/playlists",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            data: {
                name,
                description,
                public: false,
            },
        };
        const playlistResponse = await axios(config);
        const res = {
            id: playlistResponse.data.id,
            uri: playlistResponse.data.uri,
        };
        return res;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create Spotify playlist");
    }
};

/**
 * Adds tracks to a Spotify playlist
 * @param playlistId - The Spotify ID of the playlist
 * @param spotifyIds - An array of Spotify track IDs
 * @param accessToken - The user's Spotify access token
 * @throws - An error if the request fails
 */
const addTracksToPlaylist = async (
    playlistId: string,
    spotifyIds: string[],
    accessToken: string
): Promise<void> => {
    try {
        const config: AxiosRequestConfig = {
            method: "post",
            url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            data: {
                uris: spotifyIds.map((id) => `spotify:track:${id}`),
            },
        };
        await axios(config);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to add tracks to playlist");
    }
};

/**
 * Creates a playlist in the user's Spotify account with the provided song ids
 * @param name - The name of the playlist
 * @param description - The description of the playlist
 * @param accessToken - The user's Spotify access token
 * @param songIds - The ids of the songs to add to the playlist
 * @returns - The Spotify URI of the created playlist
 * @throws - An error if the request fails
 */
interface PlaylistCreationArgs {
    name: string;
    description: string;
    accessToken: string;
    songIds: string[];
}
export const createPlaylistFromSongIds = async ({
    name,
    description,
    accessToken,
    songIds,
}: PlaylistCreationArgs): Promise<string> => {
    try {
        const spotifyIds = await fetchSpotifyIds(songIds);
        const { id, uri } = await createSpotifyPlaylist(
            name,
            description,
            accessToken
        );
        await addTracksToPlaylist(id, spotifyIds, accessToken);
        return uri;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create playlist");
    }
};

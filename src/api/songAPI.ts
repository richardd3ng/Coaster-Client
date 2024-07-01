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

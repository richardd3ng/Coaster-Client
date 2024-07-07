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
        $albumUrl: String
        $previewUrl: String
    ) {
        songCreateOrUpdate(
            spotifyId: $spotifyId
            uri: $uri
            name: $name
            artists: $artists
            albumUrl: $albumUrl
            previewUrl: $previewUrl
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
    albumUrl?: string;
    previewUrl?: string;
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
            previewUrl: song.previewUrl,
        });
        return response.songCreateOrUpdate._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create or update song");
    }
};

const SongFetchRecentlyPlayedQueryDocument = graphql(`
    query SongFetchRecentlyPlayed(
        $accessToken: String!
        $limit: Int
        $after: Long!
    ) {
        songFetchRecentlyPlayed(
            accessToken: $accessToken
            limit: $limit
            after: $after
        ) {
            spotifyId
            uri
            name
            artists
            albumUrl
            previewUrl
            timestamp
        }
    }
`);
interface RecentlyPlayedSong {
    spotifyId: string;
    uri: string;
    name: string;
    artists: string[];
    albumUrl?: string;
    previewUrl?: string;
    timestamp: number;
}
/**
 * Retrieves recently played songs from Spotify for user with the provided access token
 * @param limit - Maximum number of items to return (1 to 50, default is 50)
 * @param after - Unix timestamp in milliseconds to get items after this time (IMPORTANT: needs to be a whole number)
 * @returns - An array of recently played songs
 * @throws - An error if the request fails
 */
export const fetchRecentlyPlayedSongs = async (
    accessToken: string,
    limit: number = 50,
    after?: number
): Promise<RecentlyPlayedSong[]> => {
    try {
        const response = await graphqlRequest<{
            songFetchRecentlyPlayed: RecentlyPlayedSong[];
        }>(SongFetchRecentlyPlayedQueryDocument, {
            accessToken,
            limit,
            after: after,
        });
        return response.songFetchRecentlyPlayed;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch recently played songs");
    }
};

const SongCreatePlaylistMutationDocument = graphql(`
    mutation SongCreatePlaylist(
        $name: String!
        $description: String!
        $accessToken: String!
        $songIds: [String!]!
    ) {
        songCreatePlaylist(
            name: $name
            description: $description
            accessToken: $accessToken
            songIds: $songIds
        ) {
            uri
        }
    }
`);
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
        const response = await graphqlRequest<{
            songCreatePlaylist: { uri: string };
        }>(SongCreatePlaylistMutationDocument, {
            name,
            description,
            accessToken,
            songIds,
        });
        return response.songCreatePlaylist.uri;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create playlist");
    }
};

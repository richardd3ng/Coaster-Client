import { PointFeature } from "supercluster";

import { ClusterFilter, SocialFilter } from "../types/filters";
import { createOrUpdateSong, fetchRecentlyPlayedSongs } from "./songAPI";
import {
    dispatchClearHistory,
    getCurrentUser,
    getHistoryState,
} from "../state/storeUtils";
import { formatError } from "./errorUtils";
import { generateRandomSongPoints } from "../mockData/scripts";
import { getValidAccessToken } from "./tokenUtils";
import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";
import superclusterManager, {
    SongPointProps,
} from "../utils/superclusterManager";
import {
    convertSnapshotsToSongPoints,
    getClosestLocationTimestamp,
} from "../utils/snapshotUtils";
import { SnapshotInfoFragment } from "../gql/graphql";

export const fetchAndLoadSongPoints = async (
    userId: string,
    filter: ClusterFilter
): Promise<PointFeature<SongPointProps>[]> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    let points: PointFeature<SongPointProps>[] = [];

    if (filter.type === "social") {
        switch (filter.value) {
            case SocialFilter.Me:
                // points = await fetchMeSongPoints(userId);
                points = generateRandomSongPoints(5000);
                break;
            case SocialFilter.Friends:
                // points = await fetchFriendsSongPoints(userId);
                points = generateRandomSongPoints(10_000);
                break;
            case SocialFilter.Global:
                // points = await fetchGlobalSongPoints(userId);
                points = generateRandomSongPoints(50_000);
                break;
            default:
                throw new Error("Unknown social filter value");
        }
    } else if (filter.type === "jamMem") {
        points = generateRandomSongPoints(5000);
    } else {
        throw new Error("Unknown filter type");
    }

    await superclusterManager.loadData(filter, points);
    return points;
};

const snapshotByUserIdQueryDocument = graphql(`
    query SnapshotByUserId($userId: MongoID!) {
        snapshotByUserId(userId: $userId) {
            ...SnapshotInfo
        }
    }
`);
/**
 * Fetches the song points for given user id
 * @param userId - The user id to fetch song points for
 * @returns The song points for the given user id
 * @throws An error if the request fails
 */
const fetchMeSongPoints = async (
    userId: string
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            snapshotByUserId: SnapshotInfoFragment[];
        }>(snapshotByUserIdQueryDocument, { userId });
        return convertSnapshotsToSongPoints(response.snapshotByUserId);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for me");
    }
};

const snapshotByUserFriendsQueryDocument = graphql(`
    query SnapshotByUserFriends($userId: MongoID!) {
        snapshotByUserFriends(userId: $userId) {
            ...SnapshotInfo
        }
    }
`);
/**
 * Fetches the song points for given user id and their friends
 * @param userId - The user id to fetch song points for
 * @returns The song points for the given user id and their friends
 * @throws An error if the request fails
 */
const fetchFriendsSongPoints = async (
    userId: string
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            snapshotByUserFriends: SnapshotInfoFragment[];
        }>(snapshotByUserFriendsQueryDocument, { userId });
        return convertSnapshotsToSongPoints(response.snapshotByUserFriends);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for friends");
    }
};

const snapshotByUserGlobalQueryDocument = graphql(`
    query SnapshotByUserGlobal($userId: MongoID!) {
        snapshotByUserGlobal(userId: $userId) {
            ...SnapshotInfo
        }
    }
`);
/**
 * Fetches the song points for all users who are willing to share their data
 * @returns The song points for all users who are willing to share their data
 * @throws An error if the request fails
 */
const fetchGlobalSongPoints = async (
    userId: string
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            snapshotByUserGlobal: SnapshotInfoFragment[];
        }>(snapshotByUserGlobalQueryDocument, { userId });
        return convertSnapshotsToSongPoints(response.snapshotByUserGlobal);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for global");
    }
};

const snapshotCreateManyMutationDocument = graphql(
    `
        mutation SnapshotCreateMany($snapshots: [CreateManySnapshotInput!]!) {
            snapshotCreateMany(records: $snapshots) {
                createdCount
            }
        }
    `
);
interface SnapshotCreationArgs {
    userId: string;
    songId: string;
    latitude: number;
    longitude: number;
    timestamp: number;
}
/**
 * Creates many snapshots in the database
 * @param snapshots - The snapshots to create
 * @returns The number of snapshots created
 * @throws An error if the request fails
 */
const createManySnapshots = async (
    snapshots: SnapshotCreationArgs[]
): Promise<number> => {
    try {
        const response = await graphqlRequest<{
            snapshotCreateMany: { createdCount: number };
        }>(snapshotCreateManyMutationDocument, {
            snapshots,
        });
        return response.snapshotCreateMany.createdCount;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create snapshots");
    }
};

/**
 * Posts snapshots to the database based on the current history state from redux and the user's recently-played songs from Spotify. Note: need to use a semaphore to prevent multiple calls to this function from running concurrently
 * @returns The number of succesfully posted snapshots
 * @throws An error if the request fails
 */
export const postSnapshots = async (): Promise<number> => {
    try {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            throw new Error("No user logged in");
        }
        const locations = getHistoryState();
        if (locations.length === 0) {
            return 0;
        }
        const userId = currentUser.id;
        const spotifyId = currentUser.spotifyId;

        const accessToken = await getValidAccessToken(spotifyId);
        const recentlyPlayedSongsResponse = await fetchRecentlyPlayedSongs(
            accessToken,
            50,
            Math.trunc(locations[0].timestamp)
        );
        const snapshots: SnapshotCreationArgs[] = [];
        for (const songResponse of recentlyPlayedSongsResponse["items"]) {
            const timestamp = new Date(songResponse["played_at"]).getTime();
            const matchedLocation = getClosestLocationTimestamp(
                locations,
                timestamp
            );
            if (!matchedLocation) {
                continue;
            }
            const spotifyId: string = songResponse["track"]["id"];
            const uri: string = songResponse["track"]["uri"];
            const name: string = songResponse["track"]["name"];
            const albumUrl: string =
                songResponse["track"]["album"]["images"].length > 0
                    ? songResponse["track"]["album"]["images"][0]["url"]
                    : "";
            const artists: string[] = songResponse["track"]["artists"].map(
                (artist: any) => artist["name"]
            );
            const songId = await createOrUpdateSong({
                spotifyId,
                uri,
                name,
                artists,
                albumUrl,
            });
            snapshots.push({
                userId,
                songId,
                latitude: matchedLocation.coords.latitude,
                longitude: matchedLocation.coords.longitude,
                timestamp,
            });
        }
        let createdCount = 0;
        if (snapshots.length > 0) {
            createdCount = await createManySnapshots(snapshots);
            console.log("Successfully posted", createdCount, "snapshots");
        } else {
            console.log("No snapshots to post");
        }
        dispatchClearHistory();
        return createdCount;
    } catch (error) {
        console.error(formatError(error));
        throw error;
    }
};

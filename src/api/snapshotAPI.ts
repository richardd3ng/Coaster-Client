import { PointFeature } from "supercluster";

import { ClusterFilter } from "../types/filters";
import {
    convertSnapshotsToSongPoints,
    getClosestLocationTimestamp,
} from "../utils/snapshotUtils";
import { createOrUpdateSong, fetchRecentlyPlayedSongs } from "./songAPI";
import {
    dispatchClearHistory,
    dispatchSetLastSuccessfulSnapshotTimestamp,
    getHistoryState,
    getUserId,
    getUserSpotifyId,
} from "../state/storeUtils";
import { formatError } from "./errorUtils";
import { getValidAccessToken } from "./tokenUtils";
import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";
import { SearchFilter, SnapshotInfoFragment } from "../gql/graphql";
import { showSnapshotToast } from "../utils/toastUtils";
import { SnapshotPrivacy } from "../gql/graphql";
import superclusterManager, {
    SongPointProps,
} from "../utils/superclusterManager";

export const fetchAndLoadSongPoints = async (
    userId: string,
    filter: ClusterFilter
): Promise<PointFeature<SongPointProps>[]> => {
    let points: PointFeature<SongPointProps>[] = [];
    if (filter.type === "social") {
        switch (filter.value) {
            case SnapshotPrivacy.Me:
                points = await fetchMeSongPoints(userId, filter.searchFilter);
                break;
            case SnapshotPrivacy.Friends:
                points = await fetchFriendsSongPoints(
                    userId,
                    filter.searchFilter
                );
                break;
            case SnapshotPrivacy.Everyone:
                points = await fetchGlobalSongPoints(
                    userId,
                    filter.searchFilter
                );
                break;
            default:
                throw new Error("Unknown social filter value");
        }
    } else if (filter.type === "jamMem") {
        points = await fetchJamMemSongPoints(filter.value);
    } else {
        throw new Error("Unknown filter type");
    }
    await superclusterManager.loadData(filter, points);
    return points;
};

const snapshotByUserIdQueryDocument = graphql(`
    query SnapshotByUserId($userId: MongoID!, $filter: SearchFilter) {
        snapshotByUserId(userId: $userId, filter: $filter) {
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
    userId: string,
    filter?: SearchFilter
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            snapshotByUserId: SnapshotInfoFragment[];
        }>(snapshotByUserIdQueryDocument, {
            userId,
            filter,
        });
        return convertSnapshotsToSongPoints(response.snapshotByUserId);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for me");
    }
};

const snapshotByUserFriendsQueryDocument = graphql(`
    query SnapshotByUserFriends($userId: MongoID!, $filter: SearchFilter) {
        snapshotByUserFriends(userId: $userId, filter: $filter) {
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
    userId: string,
    filter?: SearchFilter
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            snapshotByUserFriends: SnapshotInfoFragment[];
        }>(snapshotByUserFriendsQueryDocument, {
            userId,
            filter,
        });
        return convertSnapshotsToSongPoints(response.snapshotByUserFriends);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for friends");
    }
};

const snapshotByUserGlobalQueryDocument = graphql(`
    query SnapshotByUserGlobal($userId: MongoID!, $filter: SearchFilter) {
        snapshotByUserGlobal(userId: $userId, filter: $filter) {
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
    userId: string,
    filter?: SearchFilter
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            snapshotByUserGlobal: SnapshotInfoFragment[];
        }>(snapshotByUserGlobalQueryDocument, {
            userId,
            filter,
        });
        return convertSnapshotsToSongPoints(response.snapshotByUserGlobal);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for global");
    }
};

const JamMemByIdSnapshotsQueryDocument = graphql(`
    query JamMemByIdSnapshots($id: MongoID!) {
        jamMemById(_id: $id) {
            snapshots {
                ...SnapshotInfo
            }
        }
    }
`);
const fetchJamMemSongPoints = async (
    jamMemId: string
): Promise<PointFeature<SongPointProps>[]> => {
    try {
        const response = await graphqlRequest<{
            jamMemById: { snapshots: SnapshotInfoFragment[] };
        }>(JamMemByIdSnapshotsQueryDocument, { id: jamMemId });
        return convertSnapshotsToSongPoints(response.jamMemById.snapshots);
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch song points for jam mem");
    }
};

const snapshotCreateManyMutationDocument = graphql(`
    mutation SnapshotCreateMany($snapshots: [CreateManySnapshotInput!]!) {
        snapshotCreateMany(records: $snapshots) {
            createdCount
        }
    }
`);
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

const snapshotClearHistoryMutationDocument = graphql(`
    mutation SnapshotClearHistory(
        $userId: MongoID!
        $start: Date!
        $end: Date!
    ) {
        snapshotClearHistory(userId: $userId, start: $start, end: $end)
    }
`);
interface ClearSnapshotHistoryArgs {
    userId: string;
    start: Date;
    end: Date;
}
/**
 * Clears the history for the current user
 * @returns True if the history was cleared successfully
 * @throws An error if the request fails
 */
export const clearSnapshotHistory = async ({
    userId,
    start,
    end,
}: ClearSnapshotHistoryArgs): Promise<boolean> => {
    try {
        console.log(
            "clearing history",
            userId,
            start.toLocaleString(),
            end.toLocaleString()
        );
        const response = await graphqlRequest<{
            snapshotClearHistory: boolean;
        }>(snapshotClearHistoryMutationDocument, {
            userId,
            start,
            end,
        });
        return response.snapshotClearHistory;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to clear history");
    }
};

/**
 * Posts snapshots to the database based on the current history state from redux and the user's recently-played songs from Spotify. Note: need to use a semaphore to prevent multiple calls to this function from running concurrently
 * @returns The number of succesfully posted snapshots
 * @throws An error if the request fails
 */
export const postSnapshots = async (): Promise<void> => {
    try {
        const userId = getUserId();
        const spotifyId = getUserSpotifyId();
        if (!userId || !spotifyId) {
            throw new Error("No user logged in");
        }
        const locations = getHistoryState();
        if (locations.length === 0) {
            return;
        }
        const accessToken = await getValidAccessToken(spotifyId);
        const recentlyPlayedSongs = await fetchRecentlyPlayedSongs(
            accessToken,
            50,
            Math.trunc(locations[0].timestamp)
        );
        const snapshots: SnapshotCreationArgs[] = [];
        for (const song of recentlyPlayedSongs) {
            const {
                spotifyId,
                uri,
                name,
                artists,
                albumUrl,
                previewUrl,
                timestamp,
            } = song;
            const matchedLocation = getClosestLocationTimestamp(
                locations,
                timestamp
            );
            if (!matchedLocation) {
                continue;
            }
            const songId = await createOrUpdateSong({
                spotifyId,
                uri,
                name,
                artists,
                albumUrl,
                previewUrl,
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
            console.log(
                "Successfully posted",
                createdCount,
                "snapshots. History size was:",
                locations.length
            );
        } else {
            console.log("No snapshots to post");
        }
        dispatchSetLastSuccessfulSnapshotTimestamp(Date.now());
        dispatchClearHistory();
        showSnapshotToast(createdCount);
    } catch (error) {} // swallow the error because this can occur when app is backgrounded
};

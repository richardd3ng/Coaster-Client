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
                points = await fetchMeSongPoints(userId);
                break;
            case SocialFilter.Friends:
                points = generateRandomSongPoints(1000);
                break;
            case SocialFilter.Global:
                points = generateRandomSongPoints(25000);
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
export const fetchMeSongPoints = async (
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
            createdCount: number;
        }>(snapshotCreateManyMutationDocument, {
            snapshots,
        });
        return response.createdCount;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create snapshots");
    }
};

/**
 * Posts snapshots to the database based on the current history state from redux and the user's recently-played songs from Spotify
 * @returns The number of succesfully posted snapshots
 * @throws An error if the request fails
 */
export const postSnapshots = async (): Promise<number> => {
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
    try {
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
            console.log("Created or updated song with id:", songId);
            snapshots.push({
                userId,
                songId,
                latitude: matchedLocation.coords.latitude,
                longitude: matchedLocation.coords.longitude,
                timestamp,
            });
        }
        if (snapshots.length === 0) {
            console.log("No snapshots to post");
            return 0;
        }
        const createdCount = await createManySnapshots(snapshots);
        dispatchClearHistory();
        console.log("sucessfully posted", createdCount, "snapshots");
        return createdCount;
    } catch (error) {
        console.error(formatError(error));
        throw error;
    }
};

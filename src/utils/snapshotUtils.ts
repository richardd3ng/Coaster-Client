import { PointFeature } from "supercluster";

import { LocationTimestamp } from "../types/entities";
import { SnapshotInfoFragment } from "../gql/graphql";
import { SongPointProps } from "./superclusterManager";

/**
 * Converts the given snapshat data to song points
 * @param snapshots The snapshots to convert to song points
 * @returns An array of song points
 */
export const convertSnapshotsToSongPoints = (
    snapshots: SnapshotInfoFragment[]
): PointFeature<SongPointProps>[] => {
    const songPoints: PointFeature<SongPointProps>[] = [];
    snapshots.forEach((snapshot) => {
        songPoints.push({
            type: "Feature",
            properties: {
                songId: snapshot.songId,
            },
            geometry: {
                type: "Point",
                coordinates: [snapshot.longitude, snapshot.latitude],
            },
        });
    });
    return songPoints;
};

/**
 * Computes the frequency of each song id in the given snapshots
 * @param snapshots The snapshots to compute the song id frequencies of
 * @returns An array of pairs where the first element is the song id and the second element is the frequency of that song id
 */
export const computeSongIdFrequencies = (
    snapshots: PointFeature<SongPointProps>[]
): [string, number][] => {
    const songIdFreqs = new Map<string, number>();
    snapshots.forEach((snapshot) => {
        const id = snapshot.properties.songId;
        if (songIdFreqs.has(id)) {
            songIdFreqs.set(id, songIdFreqs.get(id)! + 1);
        } else {
            songIdFreqs.set(id, 1);
        }
    });
    return Array.from(songIdFreqs.entries());
};

/**
 * Returns the closest LocationTimestamp to the given timestamp
 * @param timestamp The timestamp to find the closest location to in milliseconds since epoch
 * @returns The closest LocationTimestamp to the given timestamp or null if no timestamp is close enough
 */
export const getClosestLocationTimestamp = (
    history: LocationTimestamp[],
    timestamp: number
): LocationTimestamp | null => {
    const THRESHOLD = 10 * 60 * 1000;
    let left = 0,
        right = history.length - 1;
    while (left < right) {
        const mid = left + Math.trunc((right - left) / 2);
        if (
            history[mid + 1].timestamp - timestamp <=
            timestamp - history[mid].timestamp
        ) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (Math.abs(history[left].timestamp - timestamp) < THRESHOLD) {
        return history[left];
    }
    return null;
};

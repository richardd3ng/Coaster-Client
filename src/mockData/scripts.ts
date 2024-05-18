import { PointFeature } from "supercluster";

import { SongPointProps } from "../utils/superclusterManager";

export const generateRandomSongPoints = (
    numPoints: number
): PointFeature<SongPointProps>[] => {
    const snapshots: PointFeature<SongPointProps>[] = [];
    for (let i = 0; i < numPoints; i++) {
        const latitude = Math.random() * 180 - 90; // Random latitude between -90 and 90
        const longitude = Math.random() * 360 - 180; // Random longitude between -180 and 180
        snapshots.push({
            type: "Feature",
            properties: {
                songId: Math.floor(Math.random() * 50),
            },
            geometry: {
                type: "Point",
                coordinates: [longitude, latitude],
            },
        });
    }
    return snapshots;
};

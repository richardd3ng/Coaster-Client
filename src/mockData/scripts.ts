import { PointFeature } from "supercluster";

import { SongPointProps } from "../utils/superclusterManager";
import { Song } from "../types/custom";

export const generateSongs: () => Song[] = () => {
    const songData: Song[] = [];
    for (let i = 0; i < 50; i++) {
        songData.push({
            id: i,
            title: `Song ${i}`,
            artist: `Artist ${i}`,
            albumURI: "https://picsum.photos/200/300",
        });
    }
    return songData;
};

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

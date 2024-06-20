import { PointFeature } from "supercluster";
import { SongPointProps } from "./superclusterManager";

export const computeSongIdFrequencies = (
    snapshots: PointFeature<SongPointProps>[]
): number[][] => {
    const songIdFreqs = new Map<number, number>();
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

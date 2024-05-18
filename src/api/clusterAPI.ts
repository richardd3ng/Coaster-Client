import { PointFeature } from "supercluster";

import { generateRandomSongPoints } from "../mockData/scripts";
import { SongPoint } from "../utils/superclusterManager";

export const fetchSongPointsMe = async (): Promise<
    PointFeature<SongPoint>[]
> => {
    return generateRandomSongPoints(100);
};

export const fetchSongPointsFriends = async (): Promise<
    PointFeature<SongPoint>[]
> => {
    return generateRandomSongPoints(1_000);
};

export const fetchSongPointsGlobal = async (): Promise<
    PointFeature<SongPoint>[]
> => {
    return generateRandomSongPoints(10_000);
};

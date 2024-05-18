import { PointFeature } from "supercluster";

import { generateRandomSongPoints } from "../mockData/scripts";
import { SongPointProps } from "../utils/superclusterManager";
import { SocialFilter } from "../types/custom";

export const fetchSongPoints = async (
    filter: SocialFilter
): Promise<PointFeature<SongPointProps>[]> => {
    switch (filter) {
        case SocialFilter.ME:
            return generateRandomSongPoints(100);
        case SocialFilter.FRIENDS:
            return generateRandomSongPoints(1_000);
        case SocialFilter.GLOBAL:
            return generateRandomSongPoints(10_000);
        default:
            throw new Error("Unknown filter type");
    }
};

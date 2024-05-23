import { PointFeature } from "supercluster";

import { generateRandomSongPoints } from "../mockData/scripts";
import { SongPointProps } from "../utils/superclusterManager";
import { SocialFilter } from "../types/filters";

export const fetchSongPoints = async (
    filter: SocialFilter
): Promise<PointFeature<SongPointProps>[]> => {
    switch (filter) {
        case SocialFilter.Me:
            return generateRandomSongPoints(100);
        case SocialFilter.Friends:
            return generateRandomSongPoints(1_000);
        case SocialFilter.Global:
            return generateRandomSongPoints(10_000);
        default:
            throw new Error("Unknown filter type");
    }
};

import { PointFeature } from "supercluster";
import { generateRandomSongPoints } from "../mockData/scripts";
import superclusterManager, {
    SongPointProps,
} from "../utils/superclusterManager";
import { ClusterFilter, SocialFilter } from "../types/filters";

export const fetchAndLoadSongPoints = async (
    filter: ClusterFilter
): Promise<PointFeature<SongPointProps>[]> => {
    console.log("fetching song points:", filter);
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    let points: PointFeature<SongPointProps>[] = [];

    if (filter.type === "social") {
        switch (filter.value) {
            case SocialFilter.Me:
                points = generateRandomSongPoints(100);
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

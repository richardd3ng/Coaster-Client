import { useEffect, useState } from "react";
import { Region } from "react-native-maps";
import { calculateBBox, getMapZoom, MAP_CONFIG } from "../utils/mapUtils";
import superclusterManager, { SongCluster } from "../utils/superclusterManager";
import { useSongPoints } from "./react-query/useQueryHooks";
import { ClusterFilter } from "../types/filters";

const useClusters = (region: Region | null, filter: ClusterFilter) => {
    const [clusters, setClusters] = useState<SongCluster[]>([]);
    const { data: songPoints, isLoading } = useSongPoints(filter);

    useEffect(() => {
        if (region && songPoints) {
            const bBox = calculateBBox(region);
            const zoom = getMapZoom(region, bBox, MAP_CONFIG.minZoom);
            const newClusters = superclusterManager.getClusters(
                bBox,
                zoom,
                filter
            );
            setClusters(newClusters);
        }
    }, [songPoints, region, filter]);

    return { clusters, setClusters, isLoading };
};

export default useClusters;

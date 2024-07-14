import { useEffect, useState } from "react";

import { Region } from "react-native-maps";
import { useQueryClient } from "@tanstack/react-query";

import { calculateBBox, getMapZoom, MAP_CONFIG } from "../utils/mapUtils";
import { ClusterFilter, SocialFilter } from "../types/filters";
import superclusterManager, { SongCluster } from "../utils/superclusterManager";
import {
    getQueryKeyForUseSongPointsWithFilter,
    useSongPoints,
} from "./react-query/useQueryHooks";
import { useLastSucccesfulSnapshotTimestamp } from "./redux/useSelectorHooks";
import useQueryErrorToast from "./useQueryErrorToast";

const useClusters = (region: Region | null, filter: ClusterFilter) => {
    const [clusters, setClusters] = useState<SongCluster[]>([]);
    const {
        data: songPoints,
        isLoading,
        isError,
        error,
    } = useSongPoints(filter);
    useQueryErrorToast({ isError, error });
    const lastSuccessfulSnapshotTimestamp =
        useLastSucccesfulSnapshotTimestamp();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (lastSuccessfulSnapshotTimestamp) {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSongPointsWithFilter({
                    type: "social",
                    value: SocialFilter.Me,
                }),
            });
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSongPointsWithFilter({
                    type: "social",
                    value: SocialFilter.Friends,
                }),
            });
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSongPointsWithFilter({
                    type: "social",
                    value: SocialFilter.Global,
                }),
            });
        }
    }, [queryClient, lastSuccessfulSnapshotTimestamp]);

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

    return { songPoints, clusters, setClusters, isLoading };
};

export default useClusters;

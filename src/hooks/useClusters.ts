import { useEffect, useState } from "react";

import { Region } from "react-native-maps";
import { useQueryClient } from "@tanstack/react-query";

import { calculateBBox, getMapZoom, MAP_CONFIG } from "../utils/mapUtils";
import { ClusterFilter } from "../types/filters";
import { SnapshotPrivacy } from "../gql/graphql";
import { queryKeys } from "./react-query/useQueryHooks";
import superclusterManager, { SongCluster } from "../utils/superclusterManager";
import { useSongPoints } from "./react-query/useQueryHooks";
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
                queryKey: queryKeys.songPoints({
                    type: "social",
                    value: SnapshotPrivacy.Me,
                }),
            });
            queryClient.invalidateQueries({
                queryKey: queryKeys.songPoints({
                    type: "social",
                    value: SnapshotPrivacy.Friends,
                }),
            });
            queryClient.invalidateQueries({
                queryKey: queryKeys.songPoints({
                    type: "social",
                    value: SnapshotPrivacy.Everyone,
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

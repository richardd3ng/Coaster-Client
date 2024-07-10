import { useQuery } from "@tanstack/react-query";

import { ClusterFilter } from "../../types/filters";
import {
    fetchFriends,
    fetchPendingRequests,
    fetchPreferences,
    fetchSentRequests,
} from "../../api/userAPI";
import { fetchAndLoadSongPoints } from "../../api/snapshotAPI";
import { fetchJamMem, fetchJamMemMetadatasByUser } from "../../api/jamMemAPI";
import { fetchSong } from "../../api/songAPI";
import {
    CLUSTERS_QUERY_STALE_TIME,
    JAM_MEM_QUERY_STALE_TIME,
    PENDING_REQUESTS_QUERY_STALE_TIME,
} from "../../constants/time";
import useCurrentUser from "../useCurrentUser";

/* Jam Mems */
export const useJamMem = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseJamMem(id),
        queryFn: () => fetchJamMem(id),
        staleTime: JAM_MEM_QUERY_STALE_TIME,
    });
};

export const useJamMemMetadatas = (userId: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseJamMemMetadatas(),
        queryFn: () => fetchJamMemMetadatasByUser(userId),
        staleTime: Infinity,
    });
};

export const getQueryKeyForUseJamMem = (id: string) => {
    return ["jamMem", id];
};

export const getQueryKeyForUseJamMemMetadatas = () => {
    return ["jamMemMetadatas"];
};

/* Clusters */
export const useSongPoints = (filter: ClusterFilter) => {
    const currentUserId = useCurrentUser().id;
    return useQuery({
        queryKey: getQueryKeyForUseSongPointsWithFilter(filter),
        queryFn: () => fetchAndLoadSongPoints(currentUserId, filter),
        staleTime:
            filter.type === "social" ? CLUSTERS_QUERY_STALE_TIME : Infinity,
    });
};

export const getQueryKeyForUseSongPoints = () => {
    return ["songPoints"];
};

export const getQueryKeyForUseSongPointsWithFilter = (
    filter: ClusterFilter
) => {
    return getQueryKeyForUseSongPoints().concat(filter.value);
};

/* Songs */
export const useSong = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseSong(id),
        queryFn: () => fetchSong(id),
        staleTime: Infinity,
    });
};

export const getQueryKeyForUseSong = (id: string) => {
    return ["song", id];
};

/* Users */
export const useUserPreferences = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseUserPreferences(),
        queryFn: () => fetchPreferences(id),
        staleTime: Infinity,
    });
};

export const useFriends = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseFriends(),
        queryFn: () => fetchFriends(id),
        staleTime: Infinity,
    });
};

export const usePendingRequests = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUsePendingRequests(),
        queryFn: () => fetchPendingRequests(id),
        staleTime: PENDING_REQUESTS_QUERY_STALE_TIME,
    });
};

export const useSentRequests = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseSentRequests(),
        queryFn: () => fetchSentRequests(id),
        staleTime: Infinity,
    });
};

export const getQueryKeyForUseUserPreferences = () => {
    return ["userPreferences"];
};

export const getQueryKeyForUseFriends = () => {
    return ["friends"];
};

export const getQueryKeyForUsePendingRequests = () => {
    return ["pendingRequests"];
};

export const getQueryKeyForUseSentRequests = () => {
    return ["sentRequets"];
};

export const getQueryKeyForUseMoreResults = (query: string) => {
    return ["moreResults", query];
};

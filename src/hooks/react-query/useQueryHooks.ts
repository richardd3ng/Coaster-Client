import { useQuery } from "@tanstack/react-query";

import { ClusterFilter } from "../../types/filters";
import {
    fetchCurrentUser,
    fetchFriends,
    fetchPendingRequests as fetchSentRequests,
} from "../../api/userAPI";
import { fetchJamMem, fetchJamMemMetadatas } from "../../api/jamMemAPI";
import { fetchSong } from "../../api/songAPI";
import { fetchAndLoadSongPoints } from "../../api/clusterAPI";

/* Jam Mems */
export const useJamMem = (id: number) => {
    return useQuery({
        queryKey: getQueryKeyForUseJamMem(id),
        queryFn: () => fetchJamMem(id),
    });
};

export const useJamMemMetadatas = () => {
    return useQuery({
        queryKey: getQueryKeyForUseJamMemMetadatas(),
        queryFn: fetchJamMemMetadatas,
    });
};

export const getQueryKeyForUseJamMem = (id: number) => {
    return ["jamMem", id];
};

export const getQueryKeyForUseJamMemMetadatas = () => {
    return ["jamMemMetadatas"];
};

/* Clusters */
export const useSongPoints = (filter: ClusterFilter) => {
    return useQuery({
        queryKey: getQueryKeyForUseSongPoints(filter),
        queryFn: () => fetchAndLoadSongPoints(filter),
        staleTime: filter.type === "social" ? 60 * 60 * 1000 : Infinity, // Cache dynamic data for 1 hour
    });
};

export const getQueryKeyForUseSongPoints = (filter: ClusterFilter) => {
    return ["songPoints", filter.value as string];
};

/* Songs */
export const useSong = (id: number) => {
    return useQuery({
        queryKey: getQueryKeyForUseSong(id),
        queryFn: () => fetchSong(id),
    });
};

export const getQueryKeyForUseSong = (id: number) => {
    return ["song", id];
};

/* Users */
export const useCurrentUser = () => {
    return useQuery({
        queryKey: getQueryKeyForUseCurrentUser(),
        queryFn: fetchCurrentUser,
    });
};

export const useFriends = () => {
    return useQuery({
        queryKey: getQueryKeyForUseFriends(),
        queryFn: fetchFriends,
    });
};

export const useSentRequests = () => {
    return useQuery({
        queryKey: getQueryKeyForUseSentRequests(),
        queryFn: fetchSentRequests,
    });
};

export const getQueryKeyForUseCurrentUser = () => {
    return ["currentUser"];
};

export const getQueryKeyForUseFriends = () => {
    return ["friends"];
};

export const getQueryKeyForUseSentRequests = () => {
    return ["sentRequets"];
};

export const getQueryKeyForUseMoreResults = (query: string) => {
    return ["moreResults", query];
};

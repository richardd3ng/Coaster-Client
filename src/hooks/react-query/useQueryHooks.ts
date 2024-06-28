import { useQuery } from "@tanstack/react-query";

import { ClusterFilter } from "../../types/filters";
import {
    fetchFriends,
    fetchPendingRequests,
    fetchPreferences,
    fetchSentRequests,
    fetchUserInfo,
} from "../../api/userAPI";
import { fetchAndLoadSongPoints } from "../../api/clusterAPI";
import { fetchJamMem, fetchJamMemMetadatas } from "../../api/jamMemAPI";
import { fetchSong } from "../../api/songAPI";

const HOUR = 60 * 60 * 1000; // milliseconds

/* Jam Mems */
export const useJamMem = (id: number) => {
    return useQuery({
        queryKey: getQueryKeyForUseJamMem(id),
        queryFn: () => fetchJamMem(id),
        staleTime: 12 * HOUR,
    });
};

export const useJamMemMetadatas = () => {
    return useQuery({
        queryKey: getQueryKeyForUseJamMemMetadatas(),
        queryFn: fetchJamMemMetadatas,
        staleTime: Infinity,
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
        staleTime: filter.type === "social" ? HOUR : Infinity,
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
        staleTime: Infinity,
    });
};

export const getQueryKeyForUseSong = (id: number) => {
    return ["song", id];
};

/* Users */
export const useUserInfo = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseUserInfo(),
        queryFn: () => fetchUserInfo(id),
        staleTime: Infinity,
    });
};

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
        staleTime: HOUR,
    });
};

export const useSentRequests = (id: string) => {
    return useQuery({
        queryKey: getQueryKeyForUseSentRequests(),
        queryFn: () => fetchSentRequests(id),
        staleTime: Infinity,
    });
};

export const getQueryKeyForUseUserInfo = () => {
    return ["userInfo"];
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

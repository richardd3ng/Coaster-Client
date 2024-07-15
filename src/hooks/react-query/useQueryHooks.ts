import { useQuery } from "@tanstack/react-query";

import { ClusterFilter, getFilterKey } from "../../types/filters";
import {
    CLUSTERS_QUERY_STALE_TIME,
    JAM_MEM_QUERY_STALE_TIME,
    PENDING_REQUESTS_QUERY_STALE_TIME,
} from "../../constants/time";
import {
    fetchFriends,
    fetchPendingRequests,
    fetchPreferences,
    fetchSentRequests,
} from "../../api/userAPI";
import { fetchAndLoadSongPoints } from "../../api/snapshotAPI";
import { fetchJamMem, fetchJamMemMetadatasByUser } from "../../api/jamMemAPI";
import { fetchSong } from "../../api/songAPI";
import { SnapshotPrivacy } from "../../gql/graphql";
import useCurrentUser from "../useCurrentUser";

export const queryKeys = {
    jamMem: (id: string) => ["jamMem", id],
    jamMemMetadatas: ["jamMemMetadatas"],
    songPoints: (filter: ClusterFilter) => [
        "songPoints",
        ...getFilterKey(filter),
    ],
    song: (id: string) => ["song", id],
    userPreferences: ["userPreferences"],
    friends: ["friends"],
    pendingRequests: ["pendingRequests"],
    sentRequests: ["sentRequests"],
    moreResults: (query: string) => ["moreResults", query],
};

/* Jam Mems */
export const useJamMem = (id: string) => {
    return useQuery({
        queryKey: queryKeys.jamMem(id),
        queryFn: () => fetchJamMem(id),
        staleTime: JAM_MEM_QUERY_STALE_TIME,
    });
};

export const useJamMemMetadatas = (userId: string) => {
    return useQuery({
        queryKey: queryKeys.jamMemMetadatas,
        queryFn: () => fetchJamMemMetadatasByUser(userId),
        staleTime: Infinity,
    });
};

/* Clusters */
export const useSongPoints = (filter: ClusterFilter) => {
    const currentUserId = useCurrentUser().id;

    return useQuery({
        queryKey: queryKeys.songPoints(filter),
        queryFn: () => fetchAndLoadSongPoints(currentUserId, filter),
        staleTime: () => {
            if ("searchFilter" in filter && filter.searchFilter) {
                return 0;
            }
            if (
                filter.type === "social" &&
                filter.value === SnapshotPrivacy.Me
            ) {
                return Infinity;
            }
            return CLUSTERS_QUERY_STALE_TIME;
        },
    });
};

/* Songs */
export const useSong = (id: string) => {
    return useQuery({
        queryKey: queryKeys.song(id),
        queryFn: () => fetchSong(id),
        staleTime: Infinity,
    });
};

/* Users */
export const useUserPreferences = (id: string) => {
    return useQuery({
        queryKey: queryKeys.userPreferences,
        queryFn: () => fetchPreferences(id),
        staleTime: Infinity,
    });
};

export const useFriends = (id: string) => {
    return useQuery({
        queryKey: queryKeys.friends,
        queryFn: () => fetchFriends(id),
        staleTime: Infinity,
    });
};

export const usePendingRequests = (id: string) => {
    return useQuery({
        queryKey: queryKeys.pendingRequests,
        queryFn: () => fetchPendingRequests(id),
        staleTime: PENDING_REQUESTS_QUERY_STALE_TIME,
    });
};

export const useSentRequests = (id: string) => {
    return useQuery({
        queryKey: queryKeys.sentRequests,
        queryFn: () => fetchSentRequests(id),
        staleTime: Infinity,
    });
};

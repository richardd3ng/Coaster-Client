import { useQuery } from "@tanstack/react-query";

import { fetchCurrentUser } from "../../api/userAPI";
import { fetchJamMem, fetchJamMemMetadatas } from "../../api/jamMemAPI";
import { fetchSong } from "../../api/songAPI";

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

export const getQueryKeyForUseCurrentUser = () => {
    return ["currentUser"];
};

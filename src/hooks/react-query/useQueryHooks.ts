import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { fetchJamMem, fetchJamMemMetadatas } from "../../api/jamMemAPI";
import { JamMem, JamMemMetadata } from "../../types/entities";

export const useJamMem = (id: number): UseQueryResult<JamMem, Error> => {
    return useQuery<JamMem>({
        queryKey: getQueryKeyForUseJamMem(id),
        queryFn: () => fetchJamMem(id),
    });
};

export const useJamMemMetadatas = (): UseQueryResult<
    JamMemMetadata[],
    Error
> => {
    return useQuery<JamMemMetadata[]>({
        queryKey: getQueryKeyForUseJamMemMetadatas(),
        queryFn: () => fetchJamMemMetadatas(),
    });
};

export const getQueryKeyForUseJamMem = (id: number) => {
    return ["jamMem", id];
};

export const getQueryKeyForUseJamMemMetadatas = () => {
    return ["jamMemMetadatas"];
};

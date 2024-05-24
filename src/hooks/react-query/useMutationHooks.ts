import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createJamMem } from "../../api/jamMemAPI";
import {
    getQueryKeyForUseJamMem,
    getQueryKeyForUseJamMemMetadatas,
} from "./useQueryHooks";

export const useMutationToCreateJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createJamMem,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMemMetadatas(),
            }),
    });
};

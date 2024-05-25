import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createJamMem } from "../../api/jamMemAPI";
import {
    getQueryKeyForUseCurrentUser,
    getQueryKeyForUseJamMemMetadatas,
} from "./useQueryHooks";
import { updateCurrentUser } from "../../api/userAPI";

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

export const useMutationToUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseCurrentUser(),
            }),
    });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createJamMem } from "../../api/jamMemAPI";
import { deleteFriend, updateCurrentUser } from "../../api/userAPI";
import {
    getQueryKeyForUseCurrentUser,
    getQueryKeyForUseFriends,
    getQueryKeyForUseJamMemMetadatas,
} from "./useQueryHooks";

/* Jam Mems */
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

/* Users */
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

export const useMutationToDeleteFriend = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteFriend,
        onSuccess: () => {
            console.log("invalidating");
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseFriends(),
            });
        },
    });
};

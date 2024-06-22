import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
    cancelRequest,
    deleteFriend,
    sendRequest,
    updateUserPreferences,
} from "../../api/userAPI";
import { createJamMem } from "../../api/jamMemAPI";
import {
    getQueryKeyForUseFriends,
    getQueryKeyForUseJamMemMetadatas,
    getQueryKeyForUseSentRequests,
    getQueryKeyForUseUserPreferences,
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
export const useMutationToUpdateUserPreferences = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateUserPreferences,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseUserPreferences(id),
            }),
    });
};

export const useMutationToDeleteFriend = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteFriend,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseFriends(),
            });
        },
    });
};

export const useMutationToSendRequest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sendRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSentRequests(),
            });
        },
    });
};

export const useMutationToCancelRequest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cancelRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSentRequests(),
            });
            // queryClient.invalidateQueries({
            //     queryKey: getQueryKeyForUse
            // })
        },
    });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
    cancelRequest,
    deleteFriend,
    sendRequest,
    updateCurrentUser,
} from "../../api/userAPI";
import { createJamMem } from "../../api/jamMemAPI";
import {
    getQueryKeyForUseCurrentUser,
    getQueryKeyForUseFriends,
    getQueryKeyForUseJamMemMetadatas,
    getQueryKeyForUseMoreResults,
    getQueryKeyForUseSentRequests,
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

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
    acceptRequest,
    cancelRequest,
    deleteFriend,
    ignoreRequest,
    sendRequest,
    updatePreferences,
} from "../../api/userAPI";
import { createJamMem, deleteFriendFromJamMem } from "../../api/jamMemAPI";
import {
    getQueryKeyForUseFriends,
    getQueryKeyForUseJamMem,
    getQueryKeyForUseJamMemMetadatas,
    getQueryKeyForUsePendingRequests,
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

export const useMutationToDeleteFriendFromJamMem = (jamMemId: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteFriendFromJamMem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMem(jamMemId),
            });
        },
    });
};

/* Users */
export const useMutationToUpdateUserPreferences = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updatePreferences,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseUserPreferences(),
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

export const useMutationToAcceptRequest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: acceptRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUsePendingRequests(),
            });
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseFriends(),
            });
        },
    });
};

export const useMutationToIgnoreRequest = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ignoreRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUsePendingRequests(),
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
        },
    });
};
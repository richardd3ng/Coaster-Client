import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
    acceptRequest,
    cancelRequest,
    deleteFriend,
    ignoreRequest,
    sendRequest,
    updatePreferences,
} from "../../api/userAPI";
import {
    addFriendsToJamMem,
    createJamMem,
    deleteJamMem,
    removeFriendFromJamMem,
    updateJamMem,
} from "../../api/jamMemAPI";
import { createPlaylistFromSongIds } from "../../api/songAPI";
import {
    getQueryKeyForUseFriends,
    getQueryKeyForUseJamMem,
    getQueryKeyForUseJamMemMetadatas,
    getQueryKeyForUsePendingRequests,
    getQueryKeyForUseSentRequests,
    getQueryKeyForUseSongPoints,
    getQueryKeyForUseUserPreferences,
} from "./useQueryHooks";
import { openInSpotify } from "../../utils/spotifyUtils";

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

export const useMutationToUpdateJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateJamMem,
        onSuccess: (id, updateJamMemArgs) => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMemMetadatas(),
            });
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMem(id),
            });
            if (updateJamMemArgs.record.start || updateJamMemArgs.record.end) {
                queryClient.invalidateQueries({
                    queryKey: getQueryKeyForUseSongPoints({
                        type: "jamMem",
                        value: id,
                    }),
                });
            }
        },
    });
};

export const useMutationToDeleteJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteJamMem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMemMetadatas(),
            });
        },
    });
};

export const useMutationToAddFriendsToJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addFriendsToJamMem,
        onSuccess: (id) => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMem(id),
            });
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSongPoints({
                    type: "jamMem",
                    value: id,
                }),
            });
        },
    });
};

export const useMutationToDeleteFriendFromJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeFriendFromJamMem,
        onSuccess: (id) => {
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseJamMem(id),
            });
            queryClient.invalidateQueries({
                queryKey: getQueryKeyForUseSongPoints({
                    type: "jamMem",
                    value: id,
                }),
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

/* Songs */
export const useMutationToCreatePlaylistFromSongIds = () => {
    return useMutation({
        mutationFn: createPlaylistFromSongIds,
        onSuccess: (uri) => {
            openInSpotify(uri);
        },
    });
};

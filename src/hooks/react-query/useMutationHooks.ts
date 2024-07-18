import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
    acceptRequest,
    cancelRequest,
    deleteFriend,
    ignoreRequest,
    sendRequest,
    updatePreferences,
    updateProfile,
} from "../../api/userAPI";
import {
    addFriendsToJamMem,
    createJamMem,
    deleteJamMem,
    removeFriendFromJamMem,
    updateJamMem,
} from "../../api/jamMemAPI";
import { clearSnapshotHistory, postSnapshots } from "../../api/snapshotAPI";
import { createPlaylistFromSongIds } from "../../api/songAPI";
import { dispatchSetUserServerData } from "../../state/storeUtils";
import { fetchAuthLogin } from "../../api/authAPI";
import { openInSpotify } from "../../utils/spotifyUtils";
import { queryKeys } from "./useQueryHooks";
import { SnapshotPrivacy } from "../../gql/graphql";
import { invalidateAllSocialSnapshotQueries } from "../../utils/reactQueryUtils";

/* Auth */
export const useAuthLogin = () => {
    return useMutation({
        mutationFn: ({ code, state }: { code: string; state: string }) =>
            fetchAuthLogin({ code, state }),
    });
};

/* Jam Mems */
export const useMutationToCreateJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createJamMem,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: queryKeys.jamMemMetadatas,
            }),
    });
};

export const useMutationToUpdateJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateJamMem,
        onSuccess: (id, updateJamMemArgs) => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.jamMemMetadatas,
            });
            queryClient.invalidateQueries({
                queryKey: queryKeys.jamMem(id),
            });
            if (updateJamMemArgs.record.start || updateJamMemArgs.record.end) {
                queryClient.invalidateQueries({
                    queryKey: queryKeys.songPoints({
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
                queryKey: queryKeys.jamMemMetadatas,
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
                queryKey: queryKeys.jamMem(id),
            });
            queryClient.invalidateQueries({
                queryKey: queryKeys.songPoints({
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
                queryKey: queryKeys.jamMem(id),
            });
        },
    });
};

export const useMutationToLeaveJamMem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeFriendFromJamMem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.jamMemMetadatasShared,
            });
        },
    });
};

/* Users */
export const useMutationToUpdatePreferences = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updatePreferences,
        onSuccess: (_userId, args) => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.userPreferences,
            });
            if (args.record.snapshotPrivacy !== undefined) {
                queryClient.invalidateQueries({
                    queryKey: queryKeys.songPoints({
                        type: "social",
                        value: SnapshotPrivacy.Friends,
                    }),
                });
                queryClient.invalidateQueries({
                    queryKey: queryKeys.songPoints({
                        type: "social",
                        value: SnapshotPrivacy.Everyone,
                    }),
                });
            }
        },
    });
};

export const useMutationToUpdateProfile = () => {
    return useMutation({
        mutationFn: updateProfile,
        onSuccess: dispatchSetUserServerData,
    });
};

export const useMutationToDeleteFriend = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteFriend,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKeys.friends,
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
                queryKey: queryKeys.sentRequests,
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
                queryKey: queryKeys.pendingRequests,
            });
            queryClient.invalidateQueries({
                queryKey: queryKeys.friends,
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
                queryKey: queryKeys.pendingRequests,
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
                queryKey: queryKeys.sentRequests,
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

/* Snapshots */
export const useMutationToPostSnapshots = () => {
    return useMutation({
        mutationFn: postSnapshots,
    });
};

export const useMutationToClearSnapshotHistory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: clearSnapshotHistory,
        onSuccess: () => invalidateAllSocialSnapshotQueries(queryClient),
    });
};

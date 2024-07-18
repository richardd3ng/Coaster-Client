import { QueryClient } from "@tanstack/react-query";

import { queryKeys } from "../hooks/react-query/useQueryHooks";
import { SnapshotPrivacy } from "../gql/graphql";

export const invalidateAllSocialSnapshotQueries = (queryClient: QueryClient) => {
    queryClient.invalidateQueries({
        queryKey: queryKeys.songPoints({
            type: "social",
            value: SnapshotPrivacy.Me,
        }),
    });
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
};

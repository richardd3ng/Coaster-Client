import { formatError } from "./errorUtils";
import { FriendArgs } from "../types/entities";
import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";
import { UserInfoFragment } from "../gql/graphql";

const fetchUserInfoQueryDocument = graphql(`
    query FetchUserInfo($id: MongoID!) {
        userById(_id: $id) {
            ...UserInfo
        }
    }
`);
export const fetchUserInfo = async (id: string): Promise<UserInfoFragment> => {
    const response = await graphqlRequest<{
        userById: UserInfoFragment;
    }>(fetchUserInfoQueryDocument, { id });
    return response.userById;
};

const fetchUserPreferencesQueryDocument = graphql(`
    query FetchUserPreferences($id: MongoID!) {
        userById(_id: $id) {
            trackSnapshots
            shareSnapshots
        }
    }
`);
export const fetchPreferences = async (id: string) => {
    const response = await graphqlRequest<{
        userById: {
            trackSnapshots: boolean;
            shareSnapshots: boolean;
        };
    }>(fetchUserPreferencesQueryDocument, { id });
    return response.userById;
};

const updateUserPreferencesMutationDocument = graphql(`
    mutation UpdateUserPreferences(
        $id: MongoID!
        $shareSnapshots: Boolean
        $trackSnapshots: Boolean
    ) {
        userUpdateById(
            _id: $id
            record: {
                shareSnapshots: $shareSnapshots
                trackSnapshots: $trackSnapshots
            }
        ) {
            record {
                trackSnapshots
                shareSnapshots
            }
        }
    }
`);
interface UpdatePreferencesArgs {
    id: string;
    shareSnapshots?: boolean;
    trackSnapshots?: boolean;
}
export const updatePreferences = async ({
    id,
    shareSnapshots,
    trackSnapshots,
}: UpdatePreferencesArgs) => {
    const response = await graphqlRequest<{
        record: {
            trackSnapshots: boolean;
            shareSnapshots: boolean;
        };
    }>(updateUserPreferencesMutationDocument, {
        id,
        shareSnapshots,
        trackSnapshots,
    });
    return response.record;
};

const fetchUserFriendsQueryDocument = graphql(`
    query FetchUserFriends($id: MongoID!) {
        userFriends(_id: $id) {
            ...UserInfo
        }
    }
`);
export const fetchFriends = async (id: string) => {
    const response = await graphqlRequest<{
        userFriends: UserInfoFragment[];
    }>(fetchUserFriendsQueryDocument, {
        id,
    });
    return response.userFriends;
};

const fetchUserMoreResultsQueryDocument = graphql(`
    query FetchUserMoreResults($id: MongoID!, $query: String!) {
        userMoreResults(_id: $id, query: $query) {
            ...UserInfo
        }
    }
`);
export const fetchMoreResults = async (
    id: string,
    query: string
): Promise<UserInfoFragment[]> => {
    const response = await graphqlRequest<{
        userMoreResults: UserInfoFragment[];
    }>(fetchUserMoreResultsQueryDocument, {
        id,
        query,
    });
    return response.userMoreResults;
};

const userDeleteFriendMutationDocument = graphql(`
    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {
        userDeleteFriend(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const deleteFriend = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const response = await graphqlRequest<{
        userDeleteFriend: UserInfoFragment;
    }>(userDeleteFriendMutationDocument, {
        id,
        friendId,
    });
    return response.userDeleteFriend;
};

const fetchUserPendingRequestsQueryDocument = graphql(`
    query FetchUserPendingRequests($id: MongoID!) {
        userPendingRequests(_id: $id) {
            ...UserInfo
        }
    }
`);
export const fetchPendingRequests = async (
    id: string
): Promise<UserInfoFragment[]> => {
    try {
        const response = await graphqlRequest<{
            userPendingRequests: UserInfoFragment[];
        }>(fetchUserPendingRequestsQueryDocument, {
            id,
        });
        return response.userPendingRequests;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch pending requests");
    }
};

const fetchUserSentRequestsQueryDocument = graphql(`
    query FetchUserSentRequests($id: MongoID!) {
        userSentRequests(_id: $id) {
            ...UserInfo
        }
    }
`);
export const fetchSentRequests = async (
    id: string
): Promise<UserInfoFragment[]> => {
    const response = await graphqlRequest<{
        userSentRequests: UserInfoFragment[];
    }>(fetchUserSentRequestsQueryDocument, {
        id,
    });
    return response.userSentRequests;
};

const userSendRequestMutationDocument = graphql(`
    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {
        userSendRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const sendRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const response = await graphqlRequest<{
        userSendRequest: UserInfoFragment;
    }>(userSendRequestMutationDocument, {
        id,
        friendId,
    });
    return response.userSendRequest;
};

const userAcceptRequestMutationDocument = graphql(`
    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {
        userAcceptRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const acceptRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const response = await graphqlRequest<{
        userAcceptRequest: UserInfoFragment;
    }>(userAcceptRequestMutationDocument, {
        id,
        friendId,
    });
    return response.userAcceptRequest;
};

const userCancelRequestMutationDocument = graphql(`
    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {
        userCancelRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const cancelRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const response = await graphqlRequest<{
        userCancelRequest: UserInfoFragment;
    }>(userCancelRequestMutationDocument, {
        id,
        friendId,
    });
    return response.userCancelRequest;
};

const userIgnoreRequestMutationDocument = graphql(`
    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {
        userIgnoreRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const ignoreRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const response = await graphqlRequest<{
        userIgnoreRequest: UserInfoFragment;
    }>(userIgnoreRequestMutationDocument, {
        id,
        friendId,
    });
    return response.userIgnoreRequest;
};

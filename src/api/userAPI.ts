import { formatError } from "./errorUtils";
import { FriendArgs } from "../types/entities";
import { graphql } from "../gql";
import {
    mockMoreResultsData,
    mockSentRequestsData,
} from "../mockData/constants";
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
        const result = await graphqlRequest<{
            userPendingRequests: UserInfoFragment[];
        }>(fetchUserPendingRequestsQueryDocument, {
            id,
        });
        return result.userPendingRequests;
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
    const result = await graphqlRequest<{
        userSentRequests: UserInfoFragment[];
    }>(fetchUserSentRequestsQueryDocument, {
        id,
    });
    return result.userSentRequests;
};

export const sendRequest = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    try {
        const index = mockMoreResultsData.findIndex((user) => user.id === id);
        if (index === -1) {
            throw new Error("Error: user not found");
        }
        mockSentRequestsData.push(mockMoreResultsData[index]);
        mockMoreResultsData.splice(index, 1);
    } catch (error) {
        throw new Error("Error: unable to send friend request");
    }
};

const userAcceptPendingRequestMutationDocument = graphql(`
    mutation UserAcceptPendingRequest($id: MongoID!, $friendId: MongoID!) {
        userAcceptPendingRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const acceptRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const result = await graphqlRequest<{
        userAcceptPendingRequest: UserInfoFragment;
    }>(userAcceptPendingRequestMutationDocument, {
        id,
        friendId,
    });
    return result.userAcceptPendingRequest;
};

export const cancelRequest = async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    try {
        const index = mockSentRequestsData.findIndex((user) => user.id === id);
        if (index === -1) {
            throw new Error("Error: user not found");
        }
        mockMoreResultsData.push(mockSentRequestsData[index]);
        mockSentRequestsData.splice(index, 1);
    } catch (error) {
        throw new Error("Error: unable to cancel friend request");
    }
};

const userIgnorePendingRequestMutationDocument = graphql(`
    mutation UserIgnorePendingRequest($id: MongoID!, $friendId: MongoID!) {
        userIgnorePendingRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
export const ignoreRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    const result = await graphqlRequest<{
        userIgnorePendingRequest: UserInfoFragment;
    }>(userIgnorePendingRequestMutationDocument, {
        id,
        friendId,
    });
    return result.userIgnorePendingRequest;
};

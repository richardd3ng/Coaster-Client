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
/**
 * Fetches a user's info by id
 * @param id - The id of the user
 * @returns - The fetched user info
 * @throws - An error if the request fails
 * */
export const fetchUserInfo = async (id: string): Promise<UserInfoFragment> => {
    try {
        const response = await graphqlRequest<{
            userById: UserInfoFragment;
        }>(fetchUserInfoQueryDocument, { id });
        return response.userById;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch user info");
    }
};

const fetchUserPreferencesQueryDocument = graphql(`
    query FetchUserPreferences($id: MongoID!) {
        userById(_id: $id) {
            trackSnapshots
            shareSnapshots
        }
    }
`);
/**
 * Fetches a user's preferences by id
 * @param id - The id of the user
 * @returns - The fetched user preferences
 * @throws - An error if the request fails
 * */
export const fetchPreferences = async (id: string) => {
    try {
        const response = await graphqlRequest<{
            userById: {
                trackSnapshots: boolean;
                shareSnapshots: boolean;
            };
        }>(fetchUserPreferencesQueryDocument, { id });
        return response.userById;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch user preferences");
    }
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
/**
 * Updates a user's preferences
 * @param id - The id of the user
 * @param shareSnapshots - Whether to share snapshots
 * @param trackSnapshots - Whether to track snapshots
 * @returns - The updated user preferences
 * @throws - An error if the request fails
 * */
export const updatePreferences = async ({
    id,
    shareSnapshots,
    trackSnapshots,
}: UpdatePreferencesArgs) => {
    try {
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
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to update user preferences");
    }
};

const fetchUserFriendsQueryDocument = graphql(`
    query FetchUserFriends($id: MongoID!) {
        userFriends(_id: $id) {
            ...UserInfo
        }
    }
`);
/**
 * Fetches a user's friends by id
 * @param id - The id of the user
 * @returns - The fetched friends
 * @throws - An error if the request fails
 * */
export const fetchFriends = async (id: string): Promise<UserInfoFragment[]> => {
    try {
        const response = await graphqlRequest<{
            userFriends: UserInfoFragment[];
        }>(fetchUserFriendsQueryDocument, {
            id,
        });
        return response.userFriends;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch friends");
    }
};

const fetchUserMoreResultsQueryDocument = graphql(`
    query FetchUserMoreResults($id: MongoID!, $query: String!) {
        userMoreResults(_id: $id, query: $query) {
            ...UserInfo
        }
    }
`);
/**
 * Fetches more search results for a user
 * @param id - The id of the user
 * @param query - The search query
 * @returns - The fetched search results
 * @throws - An error if the request fails
 * */
export const fetchMoreResults = async (
    id: string,
    query: string
): Promise<UserInfoFragment[]> => {
    try {
        const response = await graphqlRequest<{
            userMoreResults: UserInfoFragment[];
        }>(fetchUserMoreResultsQueryDocument, {
            id,
            query,
        });
        return response.userMoreResults;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch more results");
    }
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
    try {
        const response = await graphqlRequest<{
            userDeleteFriend: UserInfoFragment;
        }>(userDeleteFriendMutationDocument, {
            id,
            friendId,
        });
        return response.userDeleteFriend;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to delete friend");
    }
};

const fetchUserPendingRequestsQueryDocument = graphql(`
    query FetchUserPendingRequests($id: MongoID!) {
        userPendingRequests(_id: $id) {
            ...UserInfo
        }
    }
`);
/**
 * Fetches a user's pending requests by id
 * @param id - The id of the user
 * @returns - The fetched pending requests
 * @throws - An error if the request fails
 * */
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
/**
 * Fetches a user's sent requests by id
 * @param id - The id of the user
 * @returns - The fetched sent requests
 * @throws - An error if the request fails
 * */
export const fetchSentRequests = async (
    id: string
): Promise<UserInfoFragment[]> => {
    try {
        const response = await graphqlRequest<{
            userSentRequests: UserInfoFragment[];
        }>(fetchUserSentRequestsQueryDocument, {
            id,
        });
        return response.userSentRequests;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch sent requests");
    }
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
    try {
        const response = await graphqlRequest<{
            userSendRequest: UserInfoFragment;
        }>(userSendRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userSendRequest;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to send request");
    }
};

const userAcceptRequestMutationDocument = graphql(`
    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {
        userAcceptRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
/**
 * Accepts a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The updated user info
 * @throws - An error if the request fails
 * */
export const acceptRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    try {
        const response = await graphqlRequest<{
            userAcceptRequest: UserInfoFragment;
        }>(userAcceptRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userAcceptRequest;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to accept request");
    }
};

const userCancelRequestMutationDocument = graphql(`
    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {
        userCancelRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
/**
 * Cancels a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The updated user info
 * @throws - An error if the request fails
 * */
export const cancelRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    try {
        const response = await graphqlRequest<{
            userCancelRequest: UserInfoFragment;
        }>(userCancelRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userCancelRequest;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to cancel request");
    }
};

const userIgnoreRequestMutationDocument = graphql(`
    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {
        userIgnoreRequest(_id: $id, friendId: $friendId) {
            ...UserInfo
        }
    }
`);
/**
 * Ignores a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The updated user info
 * @throws - An error if the request fails
 * */
export const ignoreRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<UserInfoFragment> => {
    try {
        const response = await graphqlRequest<{
            userIgnoreRequest: UserInfoFragment;
        }>(userIgnoreRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userIgnoreRequest;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to ignore request");
    }
};

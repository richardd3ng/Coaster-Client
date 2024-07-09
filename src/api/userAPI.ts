import { formatError } from "./errorUtils";
import { FriendArgs, UserReduxState } from "../types/entities";
import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";
import { UserInfoFragment } from "../gql/graphql";

const fetchUserPreferencesQueryDocument = graphql(`
    query FetchUserPreferences($id: MongoID!) {
        userById(_id: $id) {
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
    mutation UpdateUserPreferences($id: MongoID!, $record: UserUpdateInput!) {
        userUpdateById(_id: $id, record: $record) {
            _id
        }
    }
`);
interface UpdatePreferencesArgs {
    id: string;
    record: { shareSnapshots?: boolean };
}
/**
 * Updates a user's preferences
 * @param id - The id of the user
 * @param shareSnapshots - Whether to share snapshots
 * @returns - The id of the updated user
 * @throws - An error if the request fails
 * */
export const updatePreferences = async ({
    id,
    record,
}: UpdatePreferencesArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            userUpdateById: { _id: string };
        }>(updateUserPreferencesMutationDocument, {
            id,
            record,
        });
        return response.userUpdateById._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to update user preferences");
    }
};

const updateUserProfileMutationDocument = graphql(`
    mutation UpdateUserProfile($id: MongoID!, $record: UserUpdateInput!) {
        userUpdateById(_id: $id, record: $record) {
            _id
            spotifyId
            username
            displayName
            profileUrl
            shareSnapshots
        }
    }
`);
interface UpdateProfileArgs {
    id: string;
    record: {
        displayName?: string;
        username?: string;
        profilePicture?: string;
    };
}
export const updateProfile = async ({
    id,
    record,
}: UpdateProfileArgs): Promise<UserReduxState> => {
    try {
        const response = await graphqlRequest<{
            userUpdateById: {
                _id: string;
                spotifyId: string;
                username: string;
                displayName: string;
                profileUrl: string;
                shareSnapshots: boolean;
            };
        }>(updateUserProfileMutationDocument, {
            id,
            record,
        });
        return {
            id: response.userUpdateById._id,
            spotifyId: response.userUpdateById.spotifyId,
            username: response.userUpdateById.username,
            displayName: response.userUpdateById.displayName,
            profileUrl: response.userUpdateById.profileUrl,
            preferences: {
                trackSnapshots: response.userUpdateById.shareSnapshots,
            },
        };
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to update profile");
    }
};

const userFriendsQueryDocument = graphql(`
    query UserFriends($id: MongoID!) {
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
        }>(userFriendsQueryDocument, {
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
            _id
        }
    }
`);
/**
 * Deletes a friend
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The id of the modified user
 */
export const deleteFriend = async ({
    id,
    friendId,
}: FriendArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            userDeleteFriend: { _id: string };
        }>(userDeleteFriendMutationDocument, {
            id,
            friendId,
        });
        return response.userDeleteFriend._id;
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
            _id
        }
    }
`);
/**
 * Sends a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The id of the updated user
 * @throws - An error if the request fails
 * */
export const sendRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            userSendRequest: { _id: string };
        }>(userSendRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userSendRequest._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to send request");
    }
};

const userAcceptRequestMutationDocument = graphql(`
    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {
        userAcceptRequest(_id: $id, friendId: $friendId) {
            _id
        }
    }
`);
/**
 * Accepts a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The id of the updated user
 * @throws - An error if the request fails
 * */
export const acceptRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            userAcceptRequest: { _id: string };
        }>(userAcceptRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userAcceptRequest._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to accept request");
    }
};

const userCancelRequestMutationDocument = graphql(`
    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {
        userCancelRequest(_id: $id, friendId: $friendId) {
            _id
        }
    }
`);
/**
 * Cancels a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The id of the updated user
 * @throws - An error if the request fails
 * */
export const cancelRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            userCancelRequest: { _id: string };
        }>(userCancelRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userCancelRequest._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to cancel request");
    }
};

const userIgnoreRequestMutationDocument = graphql(`
    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {
        userIgnoreRequest(_id: $id, friendId: $friendId) {
            _id
        }
    }
`);
/**
 * Ignores a friend request
 * @param id - The id of the user
 * @param friendId - The id of the friend
 * @returns - The id of the updated user
 * @throws - An error if the request fails
 * */
export const ignoreRequest = async ({
    id,
    friendId,
}: FriendArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            userIgnoreRequest: { _id: string };
        }>(userIgnoreRequestMutationDocument, {
            id,
            friendId,
        });
        return response.userIgnoreRequest._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to ignore request");
    }
};

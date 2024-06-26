import { filterUsers } from "../utils/userUtils";
import { formatError } from "./errorUtils";
import { graphql } from "../gql";
import {
    mockFriendsData,
    mockMoreResultsData,
    mockPendingRequestsData,
    mockSentRequestsData,
} from "../mockData/constants";

import { graphqlRequest } from "./client.graphql";

const fetchUserInfoQueryDocument = graphql(`
    query FetchUserInfo($id: MongoID!) {
        userById(_id: $id) {
            _id
            username
            displayName
            profileUri
        }
    }
`);
export const fetchUserInfo = async (id: string) => {
    console.log("fetch user info:", id);
    try {
        const result = await graphqlRequest<{
            userById: {
                _id: string;
                username: string;
                displayName: string;
                profileUri: string;
            };
        }>(fetchUserInfoQueryDocument, { id });
        return result.userById;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to load current user");
    }
};

const getUserPreferencesQueryDocument = graphql(`
    query GetUserPreferences($id: MongoID!) {
        userById(_id: $id) {
            trackSnapshots
            shareSnapshots
        }
    }
`);
export const fetchUserPreferences = async (id: string) => {
    console.log("fetching preferences:", id);
    try {
        const result = await graphqlRequest<{
            userById: {
                trackSnapshots: boolean;
                shareSnapshots: boolean;
            };
        }>(getUserPreferencesQueryDocument, { id });
        return result.userById;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to load preferences");
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
interface UpdateUserPreferencesArgs {
    id: string;
    shareSnapshots?: boolean;
    trackSnapshots?: boolean;
}
export const updateUserPreferences = async ({
    id,
    shareSnapshots,
    trackSnapshots,
}: UpdateUserPreferencesArgs) => {
    try {
        const result = await graphqlRequest<{
            record: {
                trackSnapshots: boolean;
                shareSnapshots: boolean;
            };
        }>(updateUserPreferencesMutationDocument, {
            id,
            shareSnapshots,
            trackSnapshots,
        });
        return result.record;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to update preferences");
    }
};

export const fetchFriends = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    return mockFriendsData;
    // throw new Error("Error: unable to load friends");
};

export const fetchMoreResults = async (query: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    return filterUsers(mockMoreResultsData, query);
};

export const deleteFriend = async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const idx = mockFriendsData.findIndex((user) => user.id === id);
    if (idx !== -1) {
        const deletedFriend = mockFriendsData[idx];
        mockFriendsData.splice(idx, 1);
        mockMoreResultsData.push(deletedFriend);
    } else {
        throw new Error(`Error: user with ID ${id} not found`);
    }
};

export const fetchPendingRequests = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    return mockPendingRequestsData;
};

export const fetchSentRequests = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    return mockSentRequestsData;
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

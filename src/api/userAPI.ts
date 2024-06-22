import { request } from "graphql-request";

import { filterUsers } from "../utils/userUtils";
import { formatError } from "./errorUtils";
import { GRAPHQL_URL } from "@env";
import {
    mockFriendsData,
    mockMoreResultsData,
    mockSentRequestsData,
} from "../mockData/constants";
import { GetUserInfoQuery, GetUserInfoQueryVariables } from "../gql/graphql";
import { graphql } from "../gql";
import { UserUpdateArgs } from "../types/entities";

const userId = "66450664ca3434bb0f6d3a36";

const getUserInfoQueryDocument = graphql(`
    query GetUserInfo($id: MongoID!) {
        userById(_id: $id) {
            _id
            username
            displayName
            profilePic
        }
    }
`);

export const fetchCurrentUser = async () => {
    try {
        const result = await request<
            GetUserInfoQuery,
            GetUserInfoQueryVariables
        >(GRAPHQL_URL, getUserInfoQueryDocument, { id: userId });
        const user = result.userById;
        console.log(user);
        return user;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to load current user");
    }
};

export const updateCurrentUser = async (userUpdateArgs: UserUpdateArgs) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const updatedUser = {
        id: mockFriendsData[1].id,
        username: mockFriendsData[1].username,
        displayName: mockFriendsData[1].displayName,
        profileUri: mockFriendsData[1].profileUri,
        trackSnapshots:
            userUpdateArgs.trackSnapshots !== undefined
                ? userUpdateArgs.trackSnapshots
                : mockFriendsData[1].trackSnapshots,
        shareSnapshots:
            userUpdateArgs.shareShapshots !== undefined
                ? userUpdateArgs.shareShapshots
                : mockFriendsData[1].shareSnapshots,
    };
    mockFriendsData[1] = updatedUser;
    if (updatedUser) {
        return updatedUser;
    }
    throw new Error("Error: unable to update User");
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

export const deleteFriend = async (id: number): Promise<void> => {
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
    return mockSentRequestsData;
};

export const fetchSentRequests = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    return mockSentRequestsData;
};

export const sendRequest = async (id: number) => {
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

export const cancelRequest = async (id: number): Promise<void> => {
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

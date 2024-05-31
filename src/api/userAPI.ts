import { mockUserData } from "../mockData/constants";
import { User, UserUpdateArgs } from "../types/entities";
import { filterUsers } from "../utils/userUtils";

export const fetchCurrentUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    return mockUserData[1];
};

export const updateCurrentUser = async (userUpdateArgs: UserUpdateArgs) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const updatedUser = {
        id: mockUserData[1].id,
        username: mockUserData[1].username,
        displayName: mockUserData[1].displayName,
        profileUri: mockUserData[1].profileUri,
        trackSnapshots:
            userUpdateArgs.trackSnapshots !== undefined
                ? userUpdateArgs.trackSnapshots
                : mockUserData[1].trackSnapshots,
        shareSnapshots:
            userUpdateArgs.shareShapshots !== undefined
                ? userUpdateArgs.shareShapshots
                : mockUserData[1].shareSnapshots,
    };
    mockUserData[1] = updatedUser;
    if (updatedUser) {
        return updatedUser;
    }
    throw new Error("Error: unable to update User");
};

export const fetchFriends = async (): Promise<User[]> => {
    console.log("fetching friends");
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    return mockUserData.slice(0, 5);
    // throw new Error("Error: unable to load friends");
};

export const fetchMoreResults = async (query: string): Promise<User[]> => {
    console.log("fetching more results");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const friends = mockUserData.slice(0, 5);
    const nonFriends = mockUserData.filter((user) => !friends.includes(user));
    return filterUsers(nonFriends, query);
};

export const deleteFriend = async (id: number): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const updatedUser = {
        id: mockUserData.length + 1,
        username: mockUserData[1].username,
        displayName: mockUserData[1].displayName,
        profileUri: mockUserData[1].profileUri,
        trackSnapshots: true,
        shareSnapshots: true,
    };
    try {
        mockUserData.push(updatedUser);
    } catch (error) {
        throw new Error("Error: unable to delete friend");
    }
};

export const fetchFriendRequests = async (): Promise<void> => {};

export const sendFriendRequest = async (id: number): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const updatedUser = {
        id: mockUserData.length + 1,
        username: mockUserData[1].username,
        displayName: mockUserData[1].displayName,
        profileUri: mockUserData[1].profileUri,
        trackSnapshots: true,
        shareSnapshots: true,
    };
    try {
        mockUserData.push(updatedUser);
    } catch (error) {
        throw new Error("Error: unable to delete friend");
    }
};

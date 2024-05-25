import { mockUserData } from "../mockData/constants";
import { UserUpdateArgs } from "../types/entities";

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

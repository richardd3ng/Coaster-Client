import { mockJamMemData } from "../mockData/constants";
import { JamMem, JamMemCreationArgs, JamMemMetadata } from "../types/entities";

export const fetchJamMemMetadatas = async (): Promise<JamMemMetadata[]> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const userId = 1; // read this from user context
    // use error.response for server errors, error.request for client (internet connection) errors
    const jamMemMetadatas = mockJamMemData.filter(
        (jamMem) => jamMem.ownerId === userId
    );
    if (jamMemMetadatas) {
        return jamMemMetadatas;
    }
    throw new Error("Unable to load Jam Mems");
};

export const fetchJamMem = async (id: number): Promise<JamMem> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const jamMem = mockJamMemData.find((jamMem) => jamMem.id === id);
    if (jamMem) {
        return jamMem;
    }
    throw new Error("Unable to open Jam Mem");
};

export const createJamMem = async (
    jamMemCreationArgs: JamMemCreationArgs
): Promise<JamMem> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const createdJamMem: JamMem = {
        id: mockJamMemData.length + 1,
        ownerId: 1,
        ...jamMemCreationArgs,
        snapshots: [],
        friends: [],
    };
    mockJamMemData.push(createdJamMem);
    if (createdJamMem) {
        return createdJamMem;
    }
    throw new Error("Error: unable to create Jam Mem");
};

interface DeleteFriendFromJamMemArgs {
    jamMemId: number;
    userId: string;
}
export const deleteFriendFromJamMem = async ({
    jamMemId,
    userId,
}: DeleteFriendFromJamMemArgs): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const jamMem = mockJamMemData.find((jamMem) => jamMem.id === jamMemId);
    if (!jamMem) {
        throw new Error("Error: Jam Mem not found");
    }
    const friendIndex = jamMem.friends.findIndex(
        (friend) => friend._id === userId
    );
    if (friendIndex === -1) {
        throw new Error("Error: friend not found in Jam Mem");
    }
    jamMem.friends.splice(friendIndex, 1);
};

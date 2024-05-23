import { mockJamMemData } from "../mockData/constants";
import { JamMem, JamMemMetadata } from "../types/custom";

export const fetchJamMemMetadatas = async (): Promise<JamMemMetadata[]> => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate network delay
    const userId = 1; // read this from user context
    return mockJamMemData.filter((jamMem) => jamMem.ownerId === userId);
};

export const fetchJamMem = async (id: number): Promise<JamMem> => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    const jamMem = mockJamMemData.find((jamMem) => jamMem.id === id);
    if (jamMem) {
        return jamMem;
    } else {
        throw new Error("Unable to open Jam Mem");
    }
};

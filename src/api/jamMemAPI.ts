import { mockJamMemData } from "../mockData/constants";
import { JamMem, JamMemMetadata } from "../types/custom";

export const fetchJamMemMetadatas = async (
    userId: number
): Promise<JamMemMetadata[]> => {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate network delay
    console.log("fetching jam mem metadata for use:", userId);
    return mockJamMemData.filter((jamMem) => jamMem.ownerId === userId);
};

export const fetchJamMem = async (id: number): Promise<JamMem> => {
    console.log("fetching jam mem snapshots for jam mem:", id);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate network delay
    const jamMem = mockJamMemData.find((jamMem) => jamMem.id === id);
    if (jamMem) {
        return jamMem;
    } else {
        throw new Error("JamMem not found");
    }
};

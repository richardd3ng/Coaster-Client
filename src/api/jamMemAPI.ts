import { mockJamMemData } from "../mockData/constants";
import { JamMem } from "../types/custom";

export const fetchJamMemDetails = async (jamMemId: number): Promise<JamMem> => {
    return mockJamMemData.find((jamMem) => jamMem.id === jamMemId)!;
};

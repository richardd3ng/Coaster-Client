import { readFile } from "react-native-fs";

export const encodeBase64 = async (filepath: string): Promise<string> => {
    return readFile(filepath, "base64");
};

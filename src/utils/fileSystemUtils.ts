import * as FileSystem from "expo-file-system";

export const encodeBase64 = async (fileUri: string): Promise<string> => {
    try {
        return FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
        });
    } catch (error) {
        console.error(error);
        throw new Error(`Error encoding file: ${fileUri}`);
    }
};

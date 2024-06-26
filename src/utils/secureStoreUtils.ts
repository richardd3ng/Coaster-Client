import * as SecureStore from "expo-secure-store";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const TOKEN_EXPIRATION_TIME_KEY = "tokenExpirationTime";

export const storeTokens = async (
    accessToken: string,
    refreshToken: string,
    expiresIn: number
): Promise<void> => {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
    await SecureStore.setItemAsync(
        TOKEN_EXPIRATION_TIME_KEY,
        (Date.now() + expiresIn * 1000).toString()
    );
};

export const getTokens = async (): Promise<{
    accessToken: string | null;
    refreshToken: string | null;
    tokenExpirationTime: number;
}> => {
    const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
    const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
    const tokenExpirationTime = await SecureStore.getItemAsync(
        TOKEN_EXPIRATION_TIME_KEY
    );

    return {
        accessToken,
        refreshToken,
        tokenExpirationTime: tokenExpirationTime
            ? Number(tokenExpirationTime)
            : 0,
    };
};

export const deleteTokens = async (): Promise<void> => {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
    await SecureStore.deleteItemAsync(TOKEN_EXPIRATION_TIME_KEY);
};

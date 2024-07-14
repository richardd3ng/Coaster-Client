import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const TOKEN_EXPIRATION_TIME_KEY = "tokenExpirationTime";

/**
 * Store the access token, refresh token and expiration time in the secure store
 * @param accessToken The access token
 * @param refreshToken The refresh token
 * @param expiresIn The number of seconds until the access token expires
 */
export const storeTokens = async (
    accessToken: string,
    refreshToken: string,
    expiresIn: number
): Promise<void> => {
    await setItemAsync(ACCESS_TOKEN_KEY, accessToken);
    await setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
    await setItemAsync(
        TOKEN_EXPIRATION_TIME_KEY,
        (Date.now() + expiresIn * 1000).toString()
    );
};

/**
 * Get the access token, refresh token and expiration time from the secure store
 * @returns The access token, refresh token and expiration time
 */
export const getTokens = async (): Promise<{
    accessToken: string | null;
    refreshToken: string | null;
    tokenExpirationTime: number;
}> => {
    const accessToken = await getItemAsync(ACCESS_TOKEN_KEY);
    const refreshToken = await getItemAsync(REFRESH_TOKEN_KEY);
    const tokenExpirationTime = await getItemAsync(TOKEN_EXPIRATION_TIME_KEY);

    return {
        accessToken,
        refreshToken,
        tokenExpirationTime: tokenExpirationTime
            ? Number(tokenExpirationTime)
            : 0,
    };
};

/**
 * Delete the access token, refresh token and expiration time from the secure store
 */
export const deleteTokens = async (): Promise<void> => {
    await deleteItemAsync(ACCESS_TOKEN_KEY);
    await deleteItemAsync(REFRESH_TOKEN_KEY);
    await deleteItemAsync(TOKEN_EXPIRATION_TIME_KEY);
};

import axios from "axios";

import { BASE_URL } from "@env";
import { formatError } from "./errorUtils";
import { getTokens, storeTokens } from "../utils/secureStoreUtils";

/**
 * Checks if the token has expired
 * @param tokenExpirationTime The time the token expires in milliseconds
 * @returns True if the token has expired, false otherwise
 */
const isTokenExpired = (tokenExpirationTime: number): boolean => {
    const currentTime = Date.now();
    return currentTime > tokenExpirationTime;
};

/**
 * Gets a new access token using the refresh token
 * @param refreshToken The refresh token
 * @param spotifyId The Spotify user ID
 * @returns The new access token
 */
export const getNewAccessToken = async (
    refreshToken: string,
    spotifyId: string
): Promise<string> => {
    try {
        const response = await axios.post(
            `${BASE_URL}/auth/spotify/refresh_tokens/${spotifyId}`
        );
        const { newAccessToken, newRefreshToken, newExpiresIn } = response.data;
        await storeTokens(
            newAccessToken,
            newRefreshToken || refreshToken,
            newExpiresIn
        );
        return newAccessToken;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error refreshing token");
    }
};

/**
 * Gets a valid access token for the given Spotify user
 * @param spotifyId The Spotify user ID
 * @returns The valid access token
 * @throws An error if no tokens are found
 */
export const getValidAccessToken = async (
    spotifyId: string
): Promise<string> => {
    const { accessToken, refreshToken, tokenExpirationTime } =
        await getTokens();

    if (!accessToken || !refreshToken || !tokenExpirationTime) {
        throw new Error("No tokens found");
    }

    if (isTokenExpired(tokenExpirationTime)) {
        return await getNewAccessToken(refreshToken, spotifyId);
    }

    return accessToken;
};

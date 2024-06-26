import { BASE_URL } from "@env";
import { getTokens, storeTokens } from "../utils/secureStoreUtils";
import axios from "axios";

const isTokenExpired = (tokenExpirationTime: number): boolean => {
    const currentTime = Date.now();
    return currentTime > tokenExpirationTime;
};

export const getNewAccessToken = async (
    refreshToken: string,
    spotifyId: string
): Promise<string> => {
    try {
        const response = await axios.post(
            `${BASE_URL}/refresh_tokens/${spotifyId}`,
            {
                refreshToken,
            }
        );
        const { newAccessToken, newRefreshToken, newExpiresIn } = response.data;
        await storeTokens(newAccessToken, newRefreshToken, newExpiresIn);
        return newAccessToken;
    } catch (error) {
        console.error("Error refreshing token:", error);
        throw error;
    }
};

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

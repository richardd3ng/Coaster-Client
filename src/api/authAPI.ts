import axios, { AxiosError, isAxiosError } from "axios";

import { formatError } from "./errorUtils";
import { UserReduxStateFragment } from "../gql/graphql";

/**
 * Fetches the access token, refresh token, and expiration time of the access token from Spotify, as well as the info of the registered user in our database
 * @param authLoginParams The code and state from the Spotify OAuth2 redirect
 * @returns The access token, refresh token, and expiration time of the access token
 * @throws An error if the request fails
 */
export const fetchAuthLogin = async (authLoginParams: {
    code: string;
    state: string;
}): Promise<{
    tokens: {
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    };
    userInfo: UserReduxStateFragment;
}> => {
    try {
        const params = new URLSearchParams({
            code: authLoginParams.code,
            state: authLoginParams.state,
        });
        const response = await axios.get(
            `${process.env.BASE_URL}/auth/spotify/login?${params.toString()}`
        );
        return {
            tokens: response.data.tokens,
            userInfo: response.data.userInfo,
        };
    } catch (error) {
        console.error(formatError(error));
        if (isAxiosError(error)) {
            if (error.code === AxiosError.ERR_NETWORK) {
                throw new Error("Network error");
            }
        }
        throw new Error("Error fetching access token");
    }
};

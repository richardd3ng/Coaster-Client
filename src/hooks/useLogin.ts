import { useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { useAuthRequest, DiscoveryDocument } from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { dispatchSetUserServerData } from "../state/storeUtils";
import { RootState } from "../state/store";
import { ScreenName, StackNavigation } from "../types/navigation";
import { storeTokens } from "../utils/secureStoreUtils";
import { useAuthLogin } from "./react-query/useMutationHooks";

const discovery: DiscoveryDocument = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const useLogin = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const userId: string | null = useSelector(
        (state: RootState) => state.user.userServerData?._id ?? null
    );
    const { mutateAsync, isPending } = useAuthLogin();

    const [_request, response, promptLogin] = useAuthRequest(
        {
            clientId: process.env.SPOTIFY_CLIENT_ID,
            scopes: [
                "ugc-image-upload",
                "playlist-modify-private",
                "user-read-recently-played",
                "user-read-private",
            ],
            redirectUri: process.env.SPOTIFY_REDIRECT_URI,
            usePKCE: false,
        },
        discovery
    );

    useEffect(() => {
        if (userId) {
            navigate(ScreenName.Map);
        }
    }, [userId, navigate]);

    const handleLogin = useCallback(
        async (code: string, state: string) => {
            try {
                const result = await mutateAsync({ code, state });
                const { tokens, userInfo } = result;
                await storeTokens(
                    tokens.accessToken,
                    tokens.refreshToken,
                    tokens.expiresIn
                );
                dispatchSetUserServerData(userInfo);
                navigate(ScreenName.Map);
            } catch (error) {
                Alert.alert((error as Error).message); // can't use toast b/c Spotify OAuth modal interferes
            }
        },
        [mutateAsync, navigate]
    );

    useEffect(() => {
        if (response?.type === "success") {
            const { code, state } = response.params;
            handleLogin(code, state);
        }
    }, [response, handleLogin]);

    return { promptLogin, isPending };
};

export default useLogin;

import { useEffect } from "react";

import { Alert } from "react-native";
import { useAuthRequest, DiscoveryDocument } from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { dispatchSetCurrentUser } from "../state/storeUtils";
import { fetchAuthLogin } from "../api/authAPI";
import { RootState } from "../state/store";
import { ScreenName, StackNavigation } from "../types/navigation";
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "@env";
import { storeTokens } from "../utils/secureStoreUtils";

const discovery: DiscoveryDocument = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const useLogin = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const currentUser = useSelector(
        (state: RootState) => state.user.currentUser
    );
    const [_request, response, promptLogin] = useAuthRequest(
        {
            clientId: SPOTIFY_CLIENT_ID,
            scopes: [
                "ugc-image-upload",
                "playlist-modify-private",
                "user-read-recently-played",
                "user-read-private",
            ],
            redirectUri: SPOTIFY_REDIRECT_URI,
            usePKCE: false,
        },
        discovery
    );

    useEffect(() => {
        if (currentUser) {
            navigate(ScreenName.Map);
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        if (response?.type === "success") {
            const { code, state } = response.params;
            const login = async () => {
                try {
                    const { tokens, userInfo } = await fetchAuthLogin({
                        code,
                        state,
                    });
                    await storeTokens(
                        tokens.accessToken,
                        tokens.refreshToken,
                        tokens.expiresIn
                    );
                    dispatchSetCurrentUser({
                        ...userInfo,
                        preferences: {
                            trackSnapshots: true,
                        },
                    });
                    navigate(ScreenName.Map);
                } catch (error) {
                    console.error(error);
                    Alert.alert("Error fetching access token");
                }
            };
            login();
        }
    }, [response, navigate]);

    return { promptLogin };
};

export default useLogin;

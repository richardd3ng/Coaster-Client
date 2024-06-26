import { useEffect } from "react";

import { useAuthRequest, DiscoveryDocument } from "expo-auth-session";
import { Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "@env";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import SpotifyIcon from "../spotifyIcon/SpotifyIcon";
import { ScreenName, StackNavigation } from "../../../types/navigation";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { fetchAuthLogin } from "../../../api/authAPI";
import { storeTokens } from "../../../utils/secureStoreUtils";
import { dispatchSetCurrentUser } from "../../../state/storeUtils";

const discovery: DiscoveryDocument = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const LoginButton = () => {
    const styles = useThemeAwareObject(createStyles);
    const { navigate } = useNavigation<StackNavigation>();
    const [request, response, promptAsync] = useAuthRequest(
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
                    dispatchSetCurrentUser(userInfo);
                    navigate(ScreenName.Map);
                } catch (error) {
                    console.error(error);
                    Alert.alert("Error fetching access token");
                }
            };
            login();
        }
    }, [response]);

    return (
        <CustomPressable
            style={styles.button}
            onPress={() => promptAsync()}
            activeOpacity={0.8}
        >
            <SpotifyIcon width={24} height={24} />
            <Text style={styles.buttonText}>Log in with Spotify</Text>
        </CustomPressable>
    );
};

export default LoginButton;

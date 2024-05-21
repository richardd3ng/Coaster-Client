import { useEffect } from "react";
import {
    makeRedirectUri,
    useAuthRequest,
    exchangeCodeAsync,
} from "expo-auth-session";
import { Text } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import SpotifyIcon from "../spotifyIcon/SpotifyIcon";
import styles from "./styles";
import { ScreenName, StackNavigation } from "../../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REDIRECT_URI,
} from "@env";

const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
};

const LoginButton = () => {
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
            usePKCE: false,
            redirectUri: makeRedirectUri({ scheme: SPOTIFY_REDIRECT_URI }),
        },
        discovery
    );

    useEffect(() => {
        if (response?.type === "success") {
            const { code } = response.params;
            const fetchAccessToken = async () => {
                try {
                    const tokenResponse = await exchangeCodeAsync(
                        {
                            clientId: SPOTIFY_CLIENT_ID,
                            clientSecret: SPOTIFY_CLIENT_SECRET,
                            code: code,
                            redirectUri: makeRedirectUri({
                                scheme: SPOTIFY_REDIRECT_URI,
                            }),
                        },
                        discovery
                    );
                    const accessToken = tokenResponse.accessToken;
                    console.log("Access token:", accessToken);
                    // Save access token and navigate to the Map screen
                    navigate(ScreenName.Loading);
                } catch (error) {
                    console.error("Error fetching access token:", error);
                }
            };
            fetchAccessToken();
        }
    }, [response]);

    return (
        <CustomPressable
            style={styles.button}
            onPress={() => {
                promptAsync();
            }}
            activeOpacity={0.8}
        >
            <SpotifyIcon width={24} height={24} />
            <Text style={styles.buttonText}>Log in with Spotify</Text>
        </CustomPressable>
    );
};

export default LoginButton;

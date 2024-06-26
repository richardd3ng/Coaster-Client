import { Text } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import SpotifyIcon from "../spotifyIcon/SpotifyIcon";
import useLogin from "../../../hooks/useLogin";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const LoginButton = () => {
    const styles = useThemeAwareObject(createStyles);
    const { promptLogin } = useLogin();

    return (
        <CustomPressable
            style={styles.button}
            onPress={() => promptLogin()}
            activeOpacity={0.8}
        >
            <SpotifyIcon width={24} height={24} />
            <Text style={styles.buttonText}>Log in with Spotify</Text>
        </CustomPressable>
    );
};

export default LoginButton;

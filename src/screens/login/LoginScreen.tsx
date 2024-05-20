import { View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList, ScreenName } from "../../types/navigation";
import styles from "./styles";

type LoginProps = NativeStackScreenProps<RootStackParamList, ScreenName.Login>;

const LoginScreen: React.FC<LoginProps> = (props: LoginProps) => {
    const handleLogin = () => {
        console.log("Log in with Spotify button pressed");
        props.navigation.navigate(ScreenName.Loading);
    };

    return (
        <View style={styles.container}>
            <Button title="Log in with Spotify" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;

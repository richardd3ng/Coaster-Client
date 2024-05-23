import { View } from "react-native";

import LoginButton from "../../components/login/loginButton/LoginButton";
import styles from "./styles";

const LoginScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <LoginButton />
        </View>
    );
};

export default LoginScreen;

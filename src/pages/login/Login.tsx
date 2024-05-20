import { View, Text, Button } from "react-native";

import styles from "./styles";

const Login: React.FC = () => {
    const handleLogin = () => {
        console.log("Log in with Spotify button pressed");
    };

    return (
        <View style={styles.container}>
            <Button title="Log in with Spotify" onPress={handleLogin} />
        </View>
    );
};

export default Login;

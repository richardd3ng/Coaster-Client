import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import MapPage from "../mapPage/MapPage";
import styles from "./styles";

const AppRoot = () => {
    return (
        <View style={styles.container}>
            <MapPage />
            <StatusBar style="auto" />
        </View>
    );
};

export default AppRoot;

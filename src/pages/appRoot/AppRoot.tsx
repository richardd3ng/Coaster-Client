import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Map from "../mapScreen/MapScreen";
import styles from "./styles";

const AppRoot = () => {
    return (
        <View style={styles.container}>
            <Map />
            <StatusBar style="auto" />
        </View>
    );
};

export default AppRoot;

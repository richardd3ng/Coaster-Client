import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import Map from "./src/pages/Map/Map";
import store from "./src/state/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Map />
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EAEAEA",
    },
    gestureHandlerRootView: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        pointerEvents: "box-none",
    },
});

export default styles;

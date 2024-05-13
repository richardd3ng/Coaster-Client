import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: "center",
    },
    gestureHandlerRootView: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        width: "100%",
        pointerEvents: "box-none",
    },
    profileIconButton: {
        height: 40,
        width: 40,
        backgroundColor: "gray",
        borderRadius: 25,
    },
});

export default styles;

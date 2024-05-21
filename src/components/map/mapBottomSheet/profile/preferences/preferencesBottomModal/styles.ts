import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomSheetModal: {
        backgroundColor: "#EAEAEA",
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    gestureHandlerRootView: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        pointerEvents: "box-none",
    },
    preferencesBottomModalTopRow: {
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#EAEAEA",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});

export default styles;

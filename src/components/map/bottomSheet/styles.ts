import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gestureHandlerRootView: {
        flex: 1,
        width: "100%",
        pointerEvents: "box-none",
    },
    bottomSheetHandle: {
        backgroundColor: "#EAEAEA",
    },
    bottomSheetTopRow: {
        flexDirection: "row",
        verticalAlign: "middle",
        paddingHorizontal: 16,
        paddingBottom: 24,
        backgroundColor: "#EAEAEA",
    },
    bottomSheetTextInput: {
        paddingRight: 12,
        borderRadius: 10,
    },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gestureHandlerRootView: {
        flex: 1,
        width: "100%",
        pointerEvents: "box-none",
    },
    bottomSheetHandle: {
        backgroundColor: "#EAEAEA",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
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
    profileIconButton: {
        height: 40,
        width: 40,
        backgroundColor: "gray",
        borderRadius: 25,
    },
});

export default styles;

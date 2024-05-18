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
    bottomSheetContentContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#EAEAEA",
    },
    jamSessionStack: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        color: "#6E6E6E",
        fontSize: 16,
        borderRadius: 5,
        overflow: "hidden",
        paddingLeft: 16,
        paddingBottom: 8,
    },
});

export default styles;

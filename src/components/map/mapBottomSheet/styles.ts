import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cancelText: {
        fontSize: 16,
        color: "blue",
    },
    bottomSheetContentContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#EAEAEA",
    },
    bottomSheetHandle: {
        backgroundColor: "#EAEAEA",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    bottomSheetTextInput: {
        paddingRight: 12,
        borderRadius: 10,
    },
    bottomSheetTopRow: {
        flexDirection: "row",
        verticalAlign: "middle",
        paddingHorizontal: 16,
        paddingBottom: 24,
        backgroundColor: "#EAEAEA",
    },
    cancelButton: {
        alignSelf: "center",
    },
    errorContainer: {
        top: "7.5%",
    },
    gestureHandlerRootView: {
        flex: 1,
        width: "100%",
        pointerEvents: "box-none",
    },
    loadingContainer: {
        top: "7.5%",
    },
    headerText: {
        color: "#6E6E6E",
        fontSize: 16,
        borderRadius: 5,
        overflow: "hidden",
        paddingLeft: 16,
        paddingBottom: 8,
    },
    jamSessionStack: {
        flex: 1,
        paddingTop: 20,
        flexDirection: "column",
        width: "100%",
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
    },
    profileIconButton: {
        height: 40,
        width: 40,
        backgroundColor: "lightgray",
        borderRadius: 25,
    },
});

export default styles;

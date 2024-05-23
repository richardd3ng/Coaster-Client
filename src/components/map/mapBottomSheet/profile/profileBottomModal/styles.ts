import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomSheetModal: {
        backgroundColor: "#EAEAEA",
    },
    bottomSheetModalContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    displayNameText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    gestureHandlerRootView: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        pointerEvents: "box-none",
    },
    profileBottomModalTopRow: {
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#EAEAEA",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    profileIconButton: {
        height: 50,
        width: 50,
        backgroundColor: "lightgray",
        borderRadius: 25,
    },
    textContainer: {
        paddingLeft: 16,
        justifyContent: "center",
        paddingRight: 32,
    },
    usernameText: {
        fontSize: 16,
        color: "gray",
    },
});

export default styles;

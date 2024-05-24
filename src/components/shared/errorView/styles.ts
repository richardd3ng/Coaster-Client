import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightgray",
        borderColor: "lightgray",
        width: 205,
    },
    buttonIcon: {},
    buttonText: { color: "royalblue" },
    messageText: {
        fontWeight: "bold",
        paddingBottom: 10,
    },
    suggestionText: {
        color: "gray",
        paddingBottom: 10,
    },
    errorContainer: {
        position: "absolute",
        top: "12.5%",
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;

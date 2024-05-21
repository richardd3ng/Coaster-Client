import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    dialog: {
        width: 300,
        paddingTop: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    horizontalDivider: {
        marginTop: 10,
        backgroundColor: "black",
        width: "100%",
    },
    verticalDivider: {
        backgroundColor: "black",
        height: "100%",
        width: 1,
    },
});

export default styles;

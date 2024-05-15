import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

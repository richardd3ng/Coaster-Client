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
        position: "absolute",
        color: "#6E6E6E",
        fontSize: 20,
        borderRadius: 5,
        overflow: "hidden",
        paddingHorizontal: 10,
        paddingTop: 2,
    },
});

export default styles;

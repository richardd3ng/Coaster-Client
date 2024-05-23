import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loadingContainer: {
        position: "absolute",
        top: "12.5%",
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    spinner: {
        height: 32,
        width: 32,
    },
    text: { color: "gray" },
});

export default styles;

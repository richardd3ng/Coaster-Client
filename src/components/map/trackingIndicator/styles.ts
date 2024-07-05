import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "transparent",
    },
    blinkingDot: {
        backgroundColor: "red",
        opacity: 0.5,
    },
});

export default styles;

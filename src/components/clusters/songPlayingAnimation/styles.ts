import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    animationContainer: {
        width: 20,
        height: 29.4, // a bit hacky, line up with title text
        overflow: "hidden",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 2,
    },
    animation: {
        width: 40,
        height: 40,
    },
});

export default styles;

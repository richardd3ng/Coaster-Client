import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        top: height * 0.1,
        right: width * 0.02,
    },
    buttonStack: {
        marginTop: 24,
        flexDirection: "column",
        alignItems: "center",
    },
});

export default styles;

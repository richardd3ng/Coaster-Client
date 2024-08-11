import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: height * 0.1,
        left: width * 0.02,
        color: "black",
    },
});

export default styles;

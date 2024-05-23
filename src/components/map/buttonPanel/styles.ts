import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    leftButtonPanel: {
        position: "absolute",
        top: height * 0.1,
        left: width * 0.02,
    },
    rightButtonPanel: {
        position: "absolute",
        top: height * 0.1,
        right: width * 0.02,
    },
});

export default styles;

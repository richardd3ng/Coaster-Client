import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    carousel: {
        width: width,
    },
});

export default styles;

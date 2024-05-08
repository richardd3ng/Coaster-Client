import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    carousel: {
        width: width,
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 8,
    },
    imageItemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        overflow: "hidden",
        marginLeft: 16,
        marginRight: 6,
    },
    text: {
        position: "absolute",
        color: "#6E6E6E",
        fontSize: 40,
        backgroundColor: "#EAEAEA",
        borderRadius: 5,
        overflow: "hidden",
        paddingHorizontal: 10,
        paddingTop: 2,
    },
});

export default styles;

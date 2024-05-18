import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    carousel: {
        width: width,
    },
    container: {
        backgroundColor: "#EAEAEA",
    },
    gestureHandlerRootView: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        pointerEvents: "box-none",
    },
    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 8,
    },
    imageItemContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "transparent",
        overflow: "hidden",
        marginLeft: 16,
        marginRight: 6,
    },
    titleText: {
        paddingHorizontal: 4,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 5,
        overflow: "hidden",
    },
    placeText: {
        paddingHorizontal: 4,
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        borderRadius: 5,
        overflow: "hidden",
    },
    dateText: {
        paddingHorizontal: 4,
        paddingBottom: 4,
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        borderRadius: 5,
        overflow: "hidden",
    },
});

export default styles;

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
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    searchBarContainer: {
        alignSelf: "center",
        height: 50,
        width: width * 0.6,
    },
});

export default styles;

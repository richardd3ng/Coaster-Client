import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    animationContainer: {
        position: "absolute",
        zIndex: -1,
    },
    container: {
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
    },
});

export default styles;

export const getIconStyle = (
    size: number
): {
    width: number;
    height: number;
} => {
    let dimensions = {
        width: 42,
        height: 42,
    };

    if (size > 500) {
        dimensions = {
            width: 58,
            height: 58,
        };
    } else if (size > 100) {
        dimensions = {
            width: 54,
            height: 54,
        };
    } else if (size > 50) {
        dimensions = {
            width: 50,
            height: 50,
        };
    }
    else if (size > 10) {
        dimensions = {
            width: 46,
            height: 46,
        };
    }

    return dimensions;
};

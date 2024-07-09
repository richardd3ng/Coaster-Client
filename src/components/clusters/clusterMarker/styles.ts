import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        width: 40,
        height: 40,
    };

    if (size > 1_000) {
        dimensions = {
            width: 50,
            height: 50,
        };
    } else if (size > 100) {
        dimensions = {
            width: 44,
            height: 44,
        };
    } else if (size > 10) {
        dimensions = {
            width: 42,
            height: 42,
        };
    }

    return dimensions;
};

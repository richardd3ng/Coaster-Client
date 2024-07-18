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
    const minSize = 42;
    const maxSize = 58;
    const maxInput = 500;
    const cappedSize = Math.min(size, maxInput);
    const scaledSize = minSize + (cappedSize / maxInput) * (maxSize - minSize);
    const roundedSize = Math.round(scaledSize);
    return {
        width: roundedSize,
        height: roundedSize,
    };
};

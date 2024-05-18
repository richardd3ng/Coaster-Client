import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    callout: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    cluster: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    image: { width: 90, height: 90 },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
    },
});

export const getImageStyle = (
    size: number
): {
    width: number;
    height: number;
} => {
    if (size > 100_000) {
        return {
            width: 42,
            height: 42,
        };
    }

    if (size > 10_000) {
        return {
            width: 40,
            height: 40,
        };
    }

    if (size > 1_000) {
        return {
            width: 38,
            height: 38,
        };
    }

    if (size > 100) {
        return {
            width: 36,
            height: 36,
        };
    }

    if (size > 10) {
        return {
            width: 34,
            height: 34,
        };
    }

    return {
        width: 32,
        height: 32,
    };
};

export default styles;

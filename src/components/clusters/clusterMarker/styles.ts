import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;

/**
 * Maps a value from one range to another linearly.
 * @param value The value to map.
 * @param inMin The minimum value of the input range.
 * @param inMax The maximum value of the input range.
 * @param outMin The minimum value of the output range.
 * @param outMax The maximum value of the output range.
 * @returns The mapped value in the output range.
 */
const mapRange = (
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const getBackgroundColor = (size: number): string => {
    const maxSize = 2000;
    const minSize = 10;
    const clampedSize = Math.max(minSize, Math.min(size, maxSize));
    // Map clampedSize to a hue value between 0 (blue) and 240 (red)
    const hue = mapRange(clampedSize, minSize, maxSize, 240, 0);
    return `hsl(${hue}, 100%, 50%)`;
};

export const getIconStyle = (
    size: number
): {
    width: number;
    height: number;
    backgroundColor: string;
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

    return {
        ...dimensions,
        backgroundColor: getBackgroundColor(size),
    };
};

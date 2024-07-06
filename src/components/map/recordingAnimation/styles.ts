import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: 16,
            height: 16,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
        },
        animation: {
            width: 24,
            height: 24,
        },
    });
};

export default createStyles;

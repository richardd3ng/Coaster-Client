import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: 20,
            height: 20,
            overflow: "hidden",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: theme.spacing.base / 4,
            bottom: theme.spacing.base / 2,
        },
        animation: {
            width: 40,
            height: 40,
            bottom: -theme.spacing.base,
        },
    });
};

export default createStyles;

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
            width: theme.size.smallAsset,
            height: theme.size.smallAsset,
        },
    });
};

export default createStyles;

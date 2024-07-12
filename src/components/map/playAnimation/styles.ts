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
            borderRadius: 16,
        },
        animation: {
            width: theme.size.mediumAsset,
            height: theme.size.mediumAsset,
        },
    });
};

export default createStyles;

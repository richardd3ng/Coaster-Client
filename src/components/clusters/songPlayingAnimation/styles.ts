import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: theme.size.xsmallAsset,
            height: theme.size.xsmallAsset,
            overflow: "hidden",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: theme.spacing.base / 4,
            bottom: theme.spacing.base / 2,
        },
        animation: {
            width: theme.size.mediumAsset,
            height: theme.size.mediumAsset,
            bottom: -6.5,
        },
    });
};

export default createStyles;

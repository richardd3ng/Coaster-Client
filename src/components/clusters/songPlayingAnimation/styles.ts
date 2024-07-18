import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: theme.size.xsmallAsset,
            overflow: "hidden",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: theme.spacing.base / 4,
        },
        animation: {
            width: theme.size.mediumAsset,
            height: theme.size.mediumAsset,
            bottom: "-11.25%",
        },
    });
};

export default createStyles;

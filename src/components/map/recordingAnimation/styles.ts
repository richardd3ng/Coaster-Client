import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: theme.size.xsmallAsset * 0.75,
            height: theme.size.xsmallAsset * 0.75,
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

import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
            color: theme.color.primary,
        },
        container: {
            height: theme.size.largeAsset,
            flexDirection: "row",
            paddingHorizontal: theme.spacing.base + 2,
            paddingVertical: theme.spacing.base + 2,
            backgroundColor: "white",
            alignItems: "center",
        },
        divider: { backgroundColor: theme.color.faded },
        text: {
            fontSize: theme.size.mediumFont,
            flex: 1,
        },
        spinner: {
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
        },
        valueContainer: {
            height: theme.size.smallAsset,
            justifyContent: "center",
            alignItems: "center",
        },
        value: {
            fontSize: theme.size.mediumFont,
            color: theme.color.faded,
        },
    });
};

export default createStyles;

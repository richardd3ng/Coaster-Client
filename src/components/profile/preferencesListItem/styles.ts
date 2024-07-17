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
            flexDirection: "row",
            paddingHorizontal: theme.spacing.base,
            paddingVertical: theme.spacing.base,
            backgroundColor: "white",
            alignItems: "center",
        },
        divider: { backgroundColor: "gray" },
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
            color: "gray",
        },
    });
};

export default createStyles;

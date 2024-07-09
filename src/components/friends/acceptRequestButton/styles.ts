import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-end",
            backgroundColor: "lightgray",
            borderRadius: theme.border.radiusPrimary,
            height: theme.size.smallAsset,
            width: theme.size.smallAsset * 3,
            padding: 0,
        },
        container: {
            flex: 1,
            alignItems: "flex-end",
            paddingRight: theme.spacing.base,
        },
        spinner: {
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
        },
        text: {
            color: theme.color.primary,
            fontSize: theme.size.smallFont,
        },
    });
};
export default createStyles;

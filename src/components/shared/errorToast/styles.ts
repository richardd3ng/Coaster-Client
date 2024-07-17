import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        contentContainer: {
            paddingLeft: theme.spacing.double,
            backgroundColor: theme.color.backgroundDanger,
        },
        icon: {
            width: theme.size.largeAsset,
            height: theme.size.largeAsset,
            color: theme.color.danger,
        },
        iconContainer: {
            justifyContent: "center",
            paddingLeft: theme.spacing.base,
            backgroundColor: theme.color.backgroundDanger,
        },
        text: {
            fontSize: theme.size.mediumFont,
            fontWeight: "500",
            color: theme.color.danger,
        },
        toast: {
            borderLeftColor: theme.color.danger,
        },
    });
};

export default createStyles;

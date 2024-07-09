import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            padding: theme.spacing.base,
            margin: theme.spacing.double,
            backgroundColor: "white",
            borderRadius: theme.border.radiusSecondary,
        },
        icon: {
            width: theme.size.largeAsset,
            height: theme.size.largeAsset,
            color: theme.color.primary,
        },
        text: {
            color: theme.color.primary,
            paddingLeft: theme.spacing.base / 2,
            fontSize: theme.size.largeFont,
        },
    });
};

export default createStyles;

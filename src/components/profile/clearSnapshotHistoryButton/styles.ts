import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            padding: theme.spacing.base,
            backgroundColor: "white",
            borderRadius: theme.border.radiusSecondary,
            marginVertical: theme.spacing.base,
        },
        icon: {
            width: theme.size.mediumAsset,
            height: theme.size.mediumAsset,
            color: theme.color.danger,
        },
        text: {
            color: theme.color.danger,
            paddingLeft: theme.spacing.base,
            fontSize: theme.size.largeFont,
        },
    });
};

export default createStyles;

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
            width: 42,
            height: 42,
            color: theme.color.primary,
        },
        text: {
            color: theme.color.primary,
            paddingLeft: theme.spacing.base / 2,
            fontSize: theme.font.large,
        },
    });
};

export default createStyles;

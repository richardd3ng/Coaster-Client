import { StyleSheet } from "react-native";

import { Theme } from "../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        toggledListItem: {
            flexDirection: "row",
            paddingHorizontal: theme.spacing.base,
            paddingVertical: theme.spacing.base,
            backgroundColor: "white",
            alignItems: "center",
            borderBottomRightRadius: theme.border.radiusSecondary,
            borderBottomLeftRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

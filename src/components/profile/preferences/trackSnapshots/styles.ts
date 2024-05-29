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
            borderTopRightRadius: theme.border.radiusSecondary,
            borderTopLeftRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

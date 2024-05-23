import { StyleSheet } from "react-native";

import { Theme } from "../../../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        bottomSheetModal: {
            backgroundColor: theme.color.background,
        },
        headerText: {
            fontSize: theme.font.xlarge,
            fontWeight: "bold",
        },
        preferencesBottomModalTopRow: {
            flexDirection: "row",
            padding: theme.spacing.double,
            backgroundColor: theme.color.background,
            borderTopLeftRadius: theme.border.radiusPrimary,
            borderTopRightRadius: theme.border.radiusPrimary,
        },
    });
};

export default createStyles;

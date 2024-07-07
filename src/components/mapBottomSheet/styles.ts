import { StyleSheet } from "react-native";

import { Theme } from "../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        bottomSheetContentContainer: {
            flex: 1,
            alignItems: "center",
            backgroundColor: theme.color.background,
        },
        bottomSheetHandle: {
            backgroundColor: theme.color.background,
            borderTopRightRadius: theme.border.radiusPrimary,
            borderTopLeftRadius: theme.border.radiusPrimary,
        },
        bottomSheetTextInput: {
            paddingRight: theme.spacing.base,
            borderRadius: theme.border.radiusSecondary,
        },
        bottomSheetTopRow: {
            flexDirection: "row",
            verticalAlign: "middle",
            paddingHorizontal: theme.spacing.double,
            paddingBottom: 24,
            backgroundColor: theme.color.background,
        },
        gestureHandlerRootView: {
            flex: 1,
            width: "100%",
            pointerEvents: "box-none",
        },
    });
};

export default createStyles;

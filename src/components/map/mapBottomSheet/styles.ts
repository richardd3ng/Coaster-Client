import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        cancelText: {
            fontSize: theme.font.medium,
            color: "blue",
        },
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
        cancelButton: {
            alignSelf: "center",
        },
        errorContainer: {
            top: "7.5%",
        },
        gestureHandlerRootView: {
            flex: 1,
            width: "100%",
            pointerEvents: "box-none",
        },
        loadingContainer: {
            top: "7.5%",
        },
        headerText: {
            color: "#6E6E6E",
            fontSize: theme.font.medium,
            paddingHorizontal: theme.spacing.double,
            paddingBottom: theme.spacing.base,
        },
        jamSessionStack: {
            flex: 1,
            paddingTop: 20, // only show top row when at snap index 0, space feels a bit awkward tho
            flexDirection: "column",
            width: "100%",
        },
        profileIconButton: {
            height: 40,
            width: 40,
            backgroundColor: "lightgray",
            borderRadius: 20,
        },
    });
};

export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "gray",
            borderBottomLeftRadius: theme.border.radiusPrimary,
            borderBottomRightRadius: theme.border.radiusPrimary,
        },
        cancelButton: {
            backgroundColor: theme.color.background,
            borderBottomLeftRadius: theme.border.radiusPrimary,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            flex: 1,
            borderWidth: 0,
        },
        confirmButton: {
            backgroundColor: theme.color.background,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: theme.border.radiusPrimary,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            flex: 1,
            borderWidth: 0,
        },
        textContainer: {
            paddingHorizontal: theme.spacing.double,
        },
        titleText: {
            fontWeight: "bold",
            fontSize: theme.font.medium,
            textAlign: "center",
        },
        descriptionText: {
            paddingTop: theme.spacing.base,
            fontSize: theme.font.small,
            textAlign: "center",
        },
        cancelText: {
            color: "#007AFF",
            fontWeight: "500",
        },
        confirmText: {
            color: "red",
            fontWeight: "300",
        },
        dialog: {
            width: 300,
            paddingTop: theme.spacing.double,
            borderRadius: theme.border.radiusPrimary,
            alignItems: "center",
            backgroundColor: theme.color.background,
        },
        overlay: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        horizontalDivider: {
            marginTop: theme.spacing.double,
            backgroundColor: "black",
            width: "100%",
            height: StyleSheet.hairlineWidth,
        },
        verticalDivider: {
            backgroundColor: "black",
            width: StyleSheet.hairlineWidth,
            height: "100%",
        },
    });
};

export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        bottomSheetModal: {
            backgroundColor: theme.color.background,
        },
        bottomSheetModalContainer: {
            flex: 1,
            padding: 24,
            justifyContent: "center",
            width: "100%",
            height: "100%",
        },
        displayNameText: {
            fontSize: theme.font.xlarge,
            fontWeight: "bold",
        },
        profileBottomModalTopRow: {
            flexDirection: "row",
            alignItems: "center",
            padding: theme.spacing.double,
            backgroundColor: theme.color.background,
            borderTopLeftRadius: theme.border.radiusPrimary,
            borderTopRightRadius: theme.border.radiusPrimary,
        },
        profileIconButton: {
            height: 50,
            width: 50,
            backgroundColor: "lightgray",
            borderRadius: 25,
        },
        textContainer: {
            flex: 1,
            paddingLeft: theme.spacing.double,
            justifyContent: "center",
            paddingRight: 32,
        },
        usernameText: {
            fontSize: theme.font.medium,
            color: "gray",
        },
    });
};

export default createStyles;

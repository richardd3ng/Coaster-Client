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
            fontSize: theme.size.xlargeFont,
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
            height: theme.size.xlargeAsset,
            width: theme.size.xlargeAsset,
            backgroundColor: "lightgray",
            borderRadius: theme.size.xlargeAsset,
        },
        textContainer: {
            flex: 1,
            paddingLeft: theme.spacing.double,
            justifyContent: "center",
            paddingRight: 32,
        },
        usernameText: {
            fontSize: theme.size.mediumFont,
            color: theme.color.faded,
        },
    });
};

export default createStyles;

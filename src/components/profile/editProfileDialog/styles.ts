import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        dialogContainer: {
            paddingVertical: theme.spacing.base,
        },
        errorText: {
            color: "red",
            paddingBottom: theme.spacing.base,
        },
        imagePickerButton: {
            height: theme.size.largeAsset,
            marginTop: theme.spacing.base,
        },
        label: {
            color: theme.color.faded,
            fontSize: theme.size.smallFont,
        },
        image: {
            width: 120,
            height: 120,
            backgroundColor: "white",
            borderRadius: 120,
        },
        imagePickerContainer: {
            justifyContent: "center",
            alignItems: "center",
        },
        displayNameInput: {
            flexDirection: "row",
            paddingTop: theme.spacing.base / 2,
            paddingBottom: theme.spacing.base,
        },
        usernameInput: {
            flexDirection: "row",
            paddingBottom: theme.spacing.double,
        },
    });
};

export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        dialogContainer: {
            paddingVertical: theme.spacing.base,
        },
        datepicker: {
            paddingBottom: theme.spacing.base,
        },
        errorText: {
            color: "red",
            paddingBottom: theme.spacing.base,
        },
        imagePickerButton: {
            flex: 1,
            height: theme.size.largeAsset,
            marginLeft: theme.spacing.base,
        },
        image: {
            width: theme.size.xlargeAsset,
            height: theme.size.xlargeAsset * 1.25,
        },
        imagePickerContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        nameInput: {
            flexDirection: "row",
            paddingVertical: theme.spacing.base,
        },
        locationInput: {
            flexDirection: "row",
            paddingBottom: theme.spacing.base,
        },
    });
};

export default createStyles;

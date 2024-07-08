import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        datepicker: {
            paddingBottom: theme.spacing.base,
        },
        dialogContainer: {
            paddingVertical: theme.spacing.base,
        },
        dropdownContainer: {
            marginVertical: theme.spacing.base,
            flexDirection: "row",
        },
        errorText: {
            color: "red",
        },
        imagePickerButton: {
            flex: 1,
            height: 40,
            marginLeft: theme.spacing.base,
        },
        image: {
            width: 48,
            height: 60,
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

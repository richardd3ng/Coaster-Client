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
        input: {
            flexDirection: "row",
            paddingVertical: theme.spacing.base,
        },
    });
};

export default createStyles;

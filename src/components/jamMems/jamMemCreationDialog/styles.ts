import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            paddingVertical: theme.spacing.base,
        },
        input: {
            flexDirection: "row",
            paddingVertical: theme.spacing.base,
        },
        datepicker: {
            paddingBottom: theme.spacing.base,
        },
        errorText: {
            color: "red",
        },
    });
};

export default createStyles;

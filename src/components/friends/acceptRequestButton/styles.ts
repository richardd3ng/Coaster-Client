import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-end",
            backgroundColor: "lightgray",
            borderRadius: theme.border.radiusPrimary,
            height: 25,
            width: 72,
            padding: 0,
        },
        container: {
            flex: 1,
            alignItems: "flex-end",
            paddingRight: theme.spacing.base,
        },
        spinner: {
            height: 25,
            width: 25,
        },
        text: {
            color: "royalblue",
            fontSize: theme.font.small,
        },
    });
};
export default createStyles;

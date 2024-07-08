import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-end",
            backgroundColor: "lightgray",
            borderRadius: theme.border.radiusPrimary,
            height: 25,
            width: 60,
            padding: 0,
        },
        container: {
            flex: 1,
            paddingRight: theme.spacing.base,
        },
        text: {
            color: theme.color.primary,
            fontSize: theme.font.small,
        },
    });
};
export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-end",
            backgroundColor: "lightgray",
            borderRadius: theme.border.radiusPrimary,
            width: 50,
            height: 25,
            padding: 0,
        },
        container: {
            flex: 1,
            alignItems: "flex-end",
            paddingRight: theme.spacing.base,
        },
        text: {
            color: "royalblue",
            fontSize: theme.font.small,
        },
    });
};
export default createStyles;

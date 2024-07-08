import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            backgroundColor: "lightgray",
            borderWidth: 0,
        },
        icon: {
            color: theme.color.primary,
        },
        text: {
            color: theme.color.primary,
        }
    });
};

export default createStyles;

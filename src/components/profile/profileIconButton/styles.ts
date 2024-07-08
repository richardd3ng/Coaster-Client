import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            height: 40,
            width: 40,
            backgroundColor: "lightgray",
            borderRadius: 20,
        },
        icon: {
            color: theme.color.primary,
        },
    });
};
export default createStyles;

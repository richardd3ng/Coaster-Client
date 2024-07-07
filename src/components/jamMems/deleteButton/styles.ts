import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            padding: theme.spacing.base,
        },
        icon: {
            width: 24,
            height: 24,
        },
        text: {
            color: "red",
            paddingLeft: theme.spacing.base / 2,
            fontSize: theme.font.medium,
        },
    });
};

export default createStyles;

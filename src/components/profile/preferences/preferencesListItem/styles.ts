import { StyleSheet } from "react-native";

import { Theme } from "../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            height: 25,
            width: 25,
            color: theme.color.primary,
        },
        container: {
            flexDirection: "row",
            paddingHorizontal: theme.spacing.base,
            paddingVertical: theme.spacing.base,
            backgroundColor: "white",
            alignItems: "center",
        },
        divider: { backgroundColor: "gray" },
        text: {
            fontSize: theme.font.medium,
            flex: 1,
        },
        spinner: {
            height: 25,
            width: 25,
        },
    });
};

export default createStyles;

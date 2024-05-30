import { StyleSheet } from "react-native";

import { Theme } from "../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            backgroundColor: "white",
            height: 24,
            width: 24,
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
            height: 24,
            width: 24,
            paddingRight: 18,
            paddingVertical: 20,
        },
    });
};

export default createStyles;

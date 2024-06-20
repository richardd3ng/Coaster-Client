import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        bottomPadding: {
            paddingVertical: theme.spacing.double,
        },
        divider: {
            width: "100%",
            backgroundColor: theme.color.background,
            height: 10,
        },
        scrollView: {
            paddingHorizontal: theme.spacing.double,
        },
        text: {
            paddingVertical: theme.spacing.double,
            fontSize: theme.font.medium,
        },
    });
};

export default createStyles;

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
            fontSize: theme.size.mediumFont,
        },
        requestsHeaderContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
    });
};

export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        divider: { backgroundColor: "gray" },
        headerContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        locationsText: {
            fontSize: theme.font.medium,
            paddingLeft: theme.spacing.double,
            paddingVertical: 12,
            color: "gray",
        },
        moreText: {
            fontSize: theme.font.medium,
            paddingLeft: theme.spacing.double,
            paddingVertical: 12,
            color: "blue",
        },
        moreTextButton: { paddingRight: theme.spacing.double },
    });
};

export default createStyles;

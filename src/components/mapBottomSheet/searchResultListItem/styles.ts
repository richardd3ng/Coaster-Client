import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        addressText: {
            fontSize: theme.font.small,
        },
        divider: { backgroundColor: "gray", marginLeft: 72 },
        iconButton: {
            backgroundColor: "white",
            width: 24,
            height: 24,
            borderRadius: 24,
        },
        listItemContainer: {
            flexDirection: "row",
            backgroundColor: theme.color.background,
            paddingHorizontal: theme.spacing.double,
            paddingVertical: 12,
        },
        placeText: {
            fontSize: theme.font.medium,
        },
        textContainer: {
            paddingLeft: theme.font.medium,
            justifyContent: "center",
            paddingRight: 32,
        },
    });
};

export default createStyles;

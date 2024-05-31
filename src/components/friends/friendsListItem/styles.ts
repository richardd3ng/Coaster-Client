import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        image: { height: 50, width: 50, borderRadius: 25 },
        imageContainer: {
            padding: theme.spacing.base,
        },
        listItemContainer: {
            paddingLeft: theme.spacing.base / 2,
            marginBottom: theme.spacing.base / 2,
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: theme.border.radiusSecondary,
            alignItems: "center",
        },
        textContainer: {
            paddingLeft: theme.spacing.base,
        },
        displayNameText: {
            fontSize: theme.font.medium,
            fontWeight: "bold",
        },
        usernameText: {
            fontSize: theme.font.small,
        },
    });
};
export default createStyles;

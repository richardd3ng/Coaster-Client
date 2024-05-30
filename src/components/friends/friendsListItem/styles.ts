import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        deleteButton: {
            alignSelf: "flex-end",
        },
        deleteButtonContainer: {
            flex: 1,
            alignItems: "flex-end",
            paddingRight: theme.spacing.base,
        },
        deleteIcon: { height: 20, width: 20 },
        image: { height: 50, width: 50, borderRadius: 25 },
        imageContainer: {
            padding: theme.spacing.base,
        },
        listItemContainer: {
            paddingLeft: 2,
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: theme.border.radiusSecondary,
            alignItems: "center",
        },
        textContainer: {
            paddingLeft: theme.spacing.base / 2,
        },
        text: {
            fontSize: theme.font.medium,
        },
    });
};
export default createStyles;

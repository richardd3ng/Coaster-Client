import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        artistText: {
            fontSize: theme.font.small,
            color: "gray",
        },
        errorLoadingContainer: {
            flex: 9,
            alignItems: "center",
        },
        errorText: {
            color: "gray",
        },
        frequencyContainer: {
            flex: 4,
            alignItems: "center",
            paddingRight: theme.spacing.base,
        },
        frequencyText: {
            fontSize: theme.font.large,
        },
        image: { width: 50, height: 50 },
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
        rankContainer: {
            flex: 1,
            alignItems: "center",
            paddingLeft: theme.spacing.base,
        },
        rankText: {
            fontSize: theme.font.large,
            fontWeight: "bold",
        },
        textContainer: {
            flex: 9,
        },
        titleText: {
            fontSize: theme.font.medium,
            fontWeight: "500",
        },
        playCountText: {
            paddingBottom: 2,
            fontSize: theme.font.small,
        },
    });
};
export default createStyles;

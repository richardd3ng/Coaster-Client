import { StyleSheet } from "react-native";

import { Theme } from "../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        arrowPressable: {
            flex: 0.05,
        },
        artistText: {
            fontSize: theme.font.small,
            color: "gray",
        },
        container: {
            flexDirection: "row",
        },
        iconContainer: {
            flex: 1,
            backgroundColor: "white",
            borderTopRightRadius: theme.border.radiusSecondary,
            borderBottomRightRadius: theme.border.radiusSecondary,
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
            borderTopLeftRadius: theme.border.radiusSecondary,
            borderBottomLeftRadius: theme.border.radiusSecondary,
            alignItems: "center",
        },
        listItemPressable: {
            flex: 0.95,
        },
        rankContainer: {
            flex: 1.5,
            alignItems: "center",
            paddingLeft: theme.spacing.base,
        },
        rankText: {
            fontSize: theme.font.large,
            fontWeight: "bold",
        },
        nameContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        nameText: {
            flex: 1,
            fontSize: theme.font.medium,
            fontWeight: "500",
        },
        playCountText: {
            paddingBottom: 2,
            fontSize: theme.font.small,
        },
        textContainer: {
            flex: 9,
        },
        verticalDivider: {
            backgroundColor: "black",
            width: StyleSheet.hairlineWidth,
            height: "100%",
        },
    });
};
export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        arrowPressable: {
            flex: 0.05,
        },
        artistText: {
            fontSize: theme.size.smallFont,
            color: theme.color.faded,
        },
        container: {
            flexDirection: "row",
            paddingHorizontal: theme.spacing.double,
        },
        icon: {
            color: theme.color.faded,
        },
        iconContainer: {
            flex: 1,
            backgroundColor: "white",
            borderTopRightRadius: theme.border.radiusSecondary,
            borderBottomRightRadius: theme.border.radiusSecondary,
        },
        errorLoadingContainer: {
            flex: 10,
            alignItems: "center",
        },
        errorText: {
            color: theme.color.faded,
        },
        frequencyContainer: {
            flex: 2,
            alignItems: "center",
            paddingRight: theme.spacing.base,
        },
        frequencyText: {
            fontSize: theme.size.smallFont,
        },
        image: {
            width: theme.size.xlargeAsset,
            height: theme.size.xlargeAsset,
        },
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
            flex: 1.25,
            alignItems: "center",
            paddingLeft: theme.spacing.base,
        },
        rankText: {
            fontSize: theme.size.mediumFont,
            fontWeight: "bold",
        },
        nameContainer: {
            flexDirection: "row",
            alignItems: "center",
            height: theme.size.xsmallAsset,
        },
        nameText: {
            flex: 1,
            fontSize: theme.size.smallFont + 1,
            fontWeight: "500",
        },
        playCountText: {
            paddingBottom: 2,
            fontSize: theme.size.smallFont - 2,
        },
        verticalDivider: {
            backgroundColor: "black",
            width: StyleSheet.hairlineWidth,
            height: "100%",
        },
    });
};
export default createStyles;

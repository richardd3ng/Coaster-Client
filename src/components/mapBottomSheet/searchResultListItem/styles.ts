import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        addressText: {
            fontSize: theme.size.smallFont,
        },
        divider: {
            backgroundColor: "gray",
            marginLeft: 72,
        },
        iconButton: {
            backgroundColor: "white",
            width: theme.size.smallAsset,
            height: theme.size.smallAsset,
            borderRadius: theme.size.smallAsset,
        },
        listItemContainer: {
            flexDirection: "row",
            backgroundColor: theme.color.background,
            paddingHorizontal: theme.spacing.double,
            paddingVertical: 12,
        },
        placeText: {
            fontSize: theme.size.mediumFont,
        },
        textContainer: {
            paddingLeft: theme.size.mediumFont,
            justifyContent: "center",
            paddingRight: 32,
        },
    });
};

export default createStyles;

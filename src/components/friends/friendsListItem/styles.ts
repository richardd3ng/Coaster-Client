import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        iconButtonContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center", // Centers items vertically
            justifyContent: "flex-end", // Aligns items to the right horizontally
        },
        image: {
            height: theme.size.xlargeAsset,
            width: theme.size.xlargeAsset,
            borderRadius: theme.size.xlargeAsset / 2,
        },
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
            fontSize: theme.size.mediumFont,
            fontWeight: "bold",
        },
        usernameText: {
            fontSize: theme.size.smallFont,
        },
    });
};
export default createStyles;

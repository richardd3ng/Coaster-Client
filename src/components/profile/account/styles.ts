import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            color: "black",
            backgroundColor: "lightblue",
            width: theme.size.largeAsset,
            height: theme.size.largeAsset,
            borderRadius: theme.size.largeAsset,
        },
        profileListItem: {
            borderTopRightRadius: theme.border.radiusSecondary,
            borderTopLeftRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

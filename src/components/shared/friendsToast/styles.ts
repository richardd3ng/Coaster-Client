import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        contentContainer: {
            paddingLeft: theme.spacing.double,
        },
        image: {
            width: theme.size.xlargeAsset,
            height: theme.size.xlargeAsset,
            borderRadius: theme.size.largeAsset,
        },
        imageContainer: {
            justifyContent: "center",
            paddingLeft: theme.spacing.base,
        },
        text: {
            fontSize: theme.size.smallFont,
            fontWeight: "500",
        },
        toast: {
            borderLeftColor: theme.color.primary,
        },
    });
};

export default createStyles;
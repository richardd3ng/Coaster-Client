import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        contentContainer: {
            paddingLeft: theme.spacing.double,
        },
        icon: {
            width: theme.size.largeAsset,
            height: theme.size.largeAsset,
            color: "black"
        },
        iconContainer: {
            justifyContent: "center",
            paddingLeft: theme.spacing.base,
        },
        text: {
            fontSize: theme.size.mediumFont,
            fontWeight: "500",
        },
        toast: {
            borderLeftColor: theme.color.success,
        },
    });
};

export default createStyles;

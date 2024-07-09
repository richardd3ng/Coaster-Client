import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            padding: theme.spacing.base,
        },
        icon: {
            width: theme.size.smallAsset,
            height: theme.size.smallAsset,
            color: theme.color.danger,
        },
        text: {
            color: theme.color.danger,
            paddingLeft: theme.spacing.base / 2,
            fontSize: theme.size.mediumFont,
        },
    });
};

export default createStyles;

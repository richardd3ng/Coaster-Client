import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            backgroundColor: "white",
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
            color: theme.color.faded,
        },
        container: {
            flexDirection: "row",
            paddingHorizontal: theme.spacing.base,
            paddingVertical: theme.spacing.base,
            backgroundColor: "white",
            alignItems: "center",
        },
        divider: { backgroundColor: theme.color.faded, marginLeft: 64 },
        text: {
            fontSize: theme.size.mediumFont,
            paddingLeft: theme.spacing.double,
            flex: 1,
        },
    });
};

export default createStyles;

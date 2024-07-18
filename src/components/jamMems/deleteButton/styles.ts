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
            width: theme.size.mediumAsset - 3,
            height: theme.size.mediumAsset - 3,
            color: theme.color.danger,
        },
        text: {
            color: theme.color.danger,
            paddingLeft: theme.spacing.base / 2,
            fontSize: theme.size.xlargeFont,
            fontWeight: "500",
        },
    });
};

export default createStyles;

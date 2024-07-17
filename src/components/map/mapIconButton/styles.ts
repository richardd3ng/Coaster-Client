import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-start",
            height: theme.size.xlargeAsset,
            width: theme.size.xlargeAsset,
            backgroundColor: "#FAF9F6",
            borderColor: theme.color.faded,
            marginTop: theme.spacing.base,
            borderRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: theme.size.xlargeAsset,
            height: theme.size.xlargeAsset,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.color.background,
        },
        animation: {
            width: theme.size.largeAsset * 2,
            height: theme.size.largeAsset * 2,
        },
        modalBackground: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
        },
        loadingContainer: {
            backgroundColor: theme.color.background,
            padding: theme.spacing.double,
            borderRadius: theme.border.radiusSecondary,
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            marginTop: theme.spacing.base,
            fontSize: theme.size.mediumFont,
            color: theme.color.primary,
            fontWeight: "600",
        },
    });
};

export default createStyles;

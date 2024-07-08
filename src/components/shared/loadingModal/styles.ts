import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        animationContainer: {
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.color.background,
        },
        animation: {
            width: 100,
            height: 100,
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
            fontSize: theme.font.medium,
            color: theme.color.primary,
            fontWeight: "600",
        },
    });
};

export default createStyles;

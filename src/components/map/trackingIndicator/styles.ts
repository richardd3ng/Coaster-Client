import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: { flexDirection: "row", alignItems: "center" },
        indicatorContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "papayawhip",
            padding: theme.spacing.base / 2,
            borderRadius: theme.border.radiusSecondary,
        },
        textContainer: {
            width: theme.size.mediumAsset,
            justifyContent: "center",
            alignItems: "flex-end",
        },
        text: {
            fontSize: theme.size.mediumFont,
        },
        questionIcon: {
            color: theme.color.faded,
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
        },
    });
};

export default createStyles;

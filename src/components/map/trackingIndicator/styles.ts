import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "papayawhip",
            padding: theme.spacing.base / 2,
            borderRadius: theme.border.radiusSecondary,
        },
        textContainer: {
            width: 26,
            justifyContent: "center",
            alignItems: "flex-end",
        },
        text: {
            fontSize: theme.font.small,
        },
    });
};

export default createStyles;

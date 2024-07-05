import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "pink",
            padding: theme.spacing.base / 2,
            borderRadius: theme.border.radiusSecondary,
        },
        dot: {
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: "crimson",
            borderColor: "white",
            borderWidth: StyleSheet.hairlineWidth
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

import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        loadingContainer: {
            ...StyleSheet.absoluteFillObject,
            pointerEvents: "box-none",
            justifyContent: "center",
            // alignItems: "center",
            alignSelf: "center",
            verticalAlign: "bottom",
        },
        spinner: {
            flex: 1,
        },
        text: {
            paddingTop: theme.spacing.base,
            fontSize: theme.font.medium,
            alignSelf: "center",
            color: "blue",
        },
    });
};

export default createStyles;

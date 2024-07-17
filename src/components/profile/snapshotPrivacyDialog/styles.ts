import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        dialogContainer: {
            paddingTop: theme.spacing.base,
            width: "100%",
        },
        descriptionText: {
            fontSize: theme.size.smallFont,
            paddingBottom: theme.spacing.base,
        },
        radioItemText: {
            fontSize: theme.size.smallFont,
            paddingLeft: theme.spacing.base,
        },
    });
};

export default createStyles;

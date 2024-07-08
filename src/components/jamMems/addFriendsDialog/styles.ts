import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        dialogContainer: {
            flexDirection: "row",
            paddingTop: theme.spacing.base,
            width: "100%",
        },
    });
};

export default createStyles;

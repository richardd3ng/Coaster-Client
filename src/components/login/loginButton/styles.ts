import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#191414",
            padding: theme.spacing.base,
            borderRadius: theme.border.radiusSecondary,
        },
        buttonText: {
            color: "white",
            paddingLeft: theme.spacing.base,
            fontWeight: "400",
            fontSize: theme.size.mediumFont,
        },
    });
};

export default createStyles;

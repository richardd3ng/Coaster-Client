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
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: theme.spacing.double,      
        },
        buttonText: {
            color: "white",
            paddingLeft: theme.spacing.base,
            fontSize: theme.font.medium,
            fontWeight: "400",
        },
    });
};

export default createStyles;

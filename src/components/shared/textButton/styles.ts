import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing.double,
        },
    });
};

export default createStyles;

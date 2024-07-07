import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        topContainer: {
            flexDirection: "row",
            padding: theme.spacing.double,
            backgroundColor: theme.color.background,
            borderTopLeftRadius: theme.border.radiusPrimary,
            borderTopRightRadius: theme.border.radiusPrimary,
        },
        headerText: {
            fontSize: theme.font.xlarge,
            fontWeight: "bold",
        },
        textContainer: {
            width: "91%",
        },
    });
};

export default createStyles;

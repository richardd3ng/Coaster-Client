import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        cancelContainer: {
            justifyContent: "center",
            paddingLeft: theme.spacing.base,
        },
        container: {
            flexDirection: "row",
            width: "100%",
        },
        input: {
            flex: 1,
            borderRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

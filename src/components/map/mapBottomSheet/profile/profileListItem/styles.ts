import { StyleSheet } from "react-native";

import { Theme } from "../../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            paddingHorizontal: theme.spacing.base,
            paddingVertical: theme.spacing.base,
            backgroundColor: "white",
            alignItems: "center",
        },
        divider: { backgroundColor: "gray", marginLeft: 64 },
        text: {
            fontSize: theme.font.medium,
            paddingLeft: theme.spacing.double,
            flex: 1,
        },
    });
};

export default createStyles;

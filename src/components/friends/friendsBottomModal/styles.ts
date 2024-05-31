import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        cancelButton: {
            flex: 1,
            paddingLeft: theme.spacing.base,
        },
        searchBarRowContainer: {
            flexDirection: "row",
            paddingHorizontal: theme.spacing.double,
            paddingBottom: theme.spacing.double,
        },
        textInput: {
            flex: 6,
            borderRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

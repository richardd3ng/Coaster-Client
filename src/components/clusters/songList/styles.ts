import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: { flex: 1, paddingBottom: 36 },
        divider: {
            width: "100%",
            backgroundColor: theme.color.background,
            height: theme.spacing.base,
        },
        listContainer: {
            flex: 1,
        },
    });
};

export default createStyles;

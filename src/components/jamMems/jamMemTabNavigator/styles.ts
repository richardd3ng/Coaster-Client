import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: theme.spacing.base,
            backgroundColor: theme.color.background,
        },
    });
};

export default createStyles;

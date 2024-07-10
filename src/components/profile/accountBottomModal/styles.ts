import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.color.background,
            paddingHorizontal: theme.spacing.double,
        },
    });
};

export default createStyles;

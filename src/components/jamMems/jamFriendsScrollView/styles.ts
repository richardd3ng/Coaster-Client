import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        scrollView: {
            paddingHorizontal: theme.spacing.double,
        },
    });
};

export default createStyles;

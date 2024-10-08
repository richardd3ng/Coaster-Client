import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        text: {
            paddingHorizontal: theme.spacing.double,
            color: theme.color.faded,
            fontSize: theme.size.mediumFont,
        },
    });
};

export default createStyles;

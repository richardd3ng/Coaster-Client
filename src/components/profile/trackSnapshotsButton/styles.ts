import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        toggledListItem: {
            borderTopRightRadius: theme.border.radiusSecondary,
            borderTopLeftRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

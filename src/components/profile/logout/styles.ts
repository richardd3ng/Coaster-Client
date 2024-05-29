import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            backgroundColor: "crimson",
        },
        profileListItem: {
            borderBottomRightRadius: theme.border.radiusSecondary,
            borderBottomLeftRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

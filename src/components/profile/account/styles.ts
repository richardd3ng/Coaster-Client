import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            backgroundColor: "lightblue",
            width: 40,
            height: 40,
            borderRadius: 20,
        },
        profileListItem: {
            borderTopRightRadius: theme.border.radiusSecondary,
            borderTopLeftRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;

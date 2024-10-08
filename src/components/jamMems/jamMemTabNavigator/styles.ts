import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: theme.spacing.base,
            backgroundColor: theme.color.background,
        },
        songListContainer: {
            flex: 1,
            backgroundColor: theme.color.background,
            paddingTop: theme.spacing.base,
        },
    });
};

export default createStyles;

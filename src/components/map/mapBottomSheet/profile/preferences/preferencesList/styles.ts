import { StyleSheet } from "react-native";

import { Theme } from "../../../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        flatlist: {
            paddingHorizontal: theme.spacing.double,
            paddingBottom: 42,
        },
    });
};

export default createStyles;

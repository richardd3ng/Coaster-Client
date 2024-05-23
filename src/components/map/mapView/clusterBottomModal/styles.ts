import { StyleSheet } from "react-native";

import { Theme } from "../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        bottomSheetModal: {
            backgroundColor: theme.color.background,
        },
    });
};

export default createStyles;

import { StyleSheet } from "react-native";

import { Theme } from "../../../../../types/theme";

const createStyles = (theme: Theme) => {
    const styles = StyleSheet.create({
        bottomSheetModal: {
            backgroundColor: theme.color.background,
        },
    });

    return styles;
};

export default createStyles;

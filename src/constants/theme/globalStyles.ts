import { StyleSheet } from "react-native";
import { BorderTheme, SpacingTheme } from "../../types/theme";

export const SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16,
};

export const BORDER_THEME: BorderTheme = {
    radius: 16,
};

const globalStyles = StyleSheet.create({
    common: {
        backgroundColor: "#EAEAEA",
    },
    bottomSheetModal: {
        borderRadius: 16,
        paddingHorizontal: 16,
    },
});

export default globalStyles;

import { ColorTheme, Theme } from "../../types/theme";
import { BORDER_THEME, SPACING_THEME } from "./globalStyles";

const DARK_COLOR_THEME: ColorTheme = {
    primary: "#03a9f4",
    onPrimary: "#fff",
    surface: "#545454",
    onSurface: "#fff",
    background: "#3f3f3f",
};

export const DARK_THEME_ID = "dark";

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    border: BORDER_THEME,
    color: DARK_COLOR_THEME,
    spacing: SPACING_THEME,
};

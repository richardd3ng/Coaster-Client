import { BORDER_THEME, SPACING_THEME } from "./globalStyles";
import { ColorTheme, Theme } from "../../types/theme";

const LIGHT_COLOR_THEME: ColorTheme = {
    primary: "#03a9f4",
    onPrimary: "#fff",
    surface: "#fff",
    onSurface: "#000",
    background: "#EAEAEA",
};

export const LIGHT_THEME_ID = "light";

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    border: BORDER_THEME,
    color: LIGHT_COLOR_THEME,
    spacing: SPACING_THEME,
};

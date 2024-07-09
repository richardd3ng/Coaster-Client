import { ColorTheme, Theme } from "../../types/theme";
import { BORDER_THEME, SIZE_THEME, SPACING_THEME } from "./globalStyles";

const DARK_COLOR_THEME: ColorTheme = {
    background: "#3f3f3f",
    primary: "#009BFF",
    danger: "#FFF2F2",
};

export const DARK_THEME_ID = "dark";

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    border: BORDER_THEME,
    color: DARK_COLOR_THEME,
    size: SIZE_THEME,
    spacing: SPACING_THEME,
};

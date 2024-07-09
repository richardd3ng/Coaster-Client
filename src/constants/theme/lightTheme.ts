import { BORDER_THEME, SIZE_THEME, SPACING_THEME } from "./globalStyles";
import { ColorTheme, Theme } from "../../types/theme";

const LIGHT_COLOR_THEME: ColorTheme = {
    background: "#EAEAEA",
    primary: "#009BFF",
    danger: "#FFF2F2",
};

export const LIGHT_THEME_ID = "light";

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    border: BORDER_THEME,
    color: LIGHT_COLOR_THEME,
    size: SIZE_THEME,
    spacing: SPACING_THEME,
};

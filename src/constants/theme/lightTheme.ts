import { BORDER_THEME, SIZE_THEME, SPACING_THEME } from "./globalStyles";
import { ColorTheme, Theme } from "../../types/theme";
import colors from ".././../../assets/themes/colors.json";

const LIGHT_COLOR_THEME: ColorTheme = {
    background: colors["color-basic-300"],
    backgroundDanger: colors["color-danger-100"],
    primary: colors["color-primary-400"],
    danger: colors["color-danger-500"],
    success: colors["color-success-500"],
    faded: colors["color-basic-600"],
};

export const LIGHT_THEME_ID = "light";

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    border: BORDER_THEME,
    color: LIGHT_COLOR_THEME,
    size: SIZE_THEME,
    spacing: SPACING_THEME,
};

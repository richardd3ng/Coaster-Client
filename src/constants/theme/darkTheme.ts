import { ColorTheme, Theme } from "../../types/theme";
import { BORDER_THEME, SIZE_THEME, SPACING_THEME } from "./globalStyles";
import colors from "../../../assets/themes/colors.json";

const DARK_COLOR_THEME: ColorTheme = {
    background: colors["color-basic-800"],
    backgroundDanger: colors["color-danger-100"],
    primary: colors["color-primary-400"],
    danger: colors["color-danger-500"],
    success: colors["color-success-500"],
    faded: colors["color-basic-600"],
};


export const DARK_THEME_ID = "dark";

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    border: BORDER_THEME,
    color: DARK_COLOR_THEME,
    size: SIZE_THEME,
    spacing: SPACING_THEME,
};

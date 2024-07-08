export interface BorderTheme {
    radiusPrimary: number;
    radiusSecondary: number;
}

export interface ColorTheme {
    background: string;
    primary: string;
}

export interface FontTheme {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
}

export interface SpacingTheme {
    base: number;
    double: number;
}

export interface Theme {
    id: string;
    border: BorderTheme;
    font: FontTheme;
    color: ColorTheme;
    spacing: SpacingTheme;
}

export interface BorderTheme {
    radiusPrimary: number;
    radiusSecondary: number;
}

export interface ColorTheme {
    background: string;
    backgroundDanger: string;
    primary: string;
    danger: string;
    success: string;
    faded: string;
}

export interface SizeTheme {
    xsmallAsset: number;
    smallAsset: number;
    mediumAsset: number;
    largeAsset: number;
    xlargeAsset: number;

    smallFont: number;
    mediumFont: number;
    largeFont: number;
    xlargeFont: number;
}

export interface SpacingTheme {
    base: number;
    double: number;
}

export interface Theme {
    id: string;
    border: BorderTheme;
    size: SizeTheme;
    color: ColorTheme;
    spacing: SpacingTheme;
}

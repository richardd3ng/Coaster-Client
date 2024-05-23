import React from "react";

import { Theme } from "../types/theme";
import { useTheme } from "./context/ThemeContext";

type Generator<T extends {}> = (theme: Theme) => T;

const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
    const { theme } = useTheme();
    return React.useMemo(() => fn(theme), [fn, theme]);
};

export default useThemeAwareObject;

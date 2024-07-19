import {
    createContext,
    memo,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

import { DARK_THEME, DARK_THEME_ID } from "../../constants/theme/darkTheme";
import { LIGHT_THEME, LIGHT_THEME_ID } from "../../constants/theme/lightTheme";
import { Theme } from "../../types/theme";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: LIGHT_THEME,
    toggleTheme: () => {
        console.log("ThemeProvider is not rendered!");
    },
});

interface ThemeProviderProps {
    initial: Theme;
    children?: ReactNode;
}

export const ThemeProvider = memo<ThemeProviderProps>(
    ({ initial, children }: ThemeProviderProps) => {
        const [theme, setTheme] = useState<Theme>(initial);

        const ToggleThemeCallback = useCallback(() => {
            setTheme((currentTheme) => {
                if (currentTheme.id === LIGHT_THEME_ID) {
                    return LIGHT_THEME;
                }
                if (currentTheme.id === DARK_THEME_ID) {
                    return DARK_THEME;
                }
                return currentTheme;
            });
        }, []);

        const MemoizedValue = useMemo(() => {
            const value: ThemeContextType = {
                theme,
                toggleTheme: ToggleThemeCallback,
            };
            return value;
        }, [theme, ToggleThemeCallback]);

        return (
            <ThemeContext.Provider value={MemoizedValue}>
                {children}
            </ThemeContext.Provider>
        );
    }
);

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

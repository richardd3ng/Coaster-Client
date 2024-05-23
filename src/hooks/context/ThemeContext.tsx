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

interface ProvidedValue {
    theme: Theme;
    toggleTheme: () => void;
}

const Context = createContext<ProvidedValue>({
    theme: LIGHT_THEME,
    toggleTheme: () => {
        console.log("ThemeProvider is not rendered!");
    },
});

interface ThemeProviderProps {
    initial: Theme;
    children?: ReactNode;
}

export const ThemeProvider = memo<ThemeProviderProps>((props) => {
    const [theme, setTheme] = useState<Theme>(props.initial);

    const ToggleThemeCallback = useCallback(() => {
        setTheme((currentTheme) => {
            if (currentTheme.id === LIGHT_THEME_ID) {
                return DARK_THEME;
            }
            if (currentTheme.id === DARK_THEME_ID) {
                return LIGHT_THEME;
            }
            return currentTheme;
        });
    }, []);

    const MemoizedValue = useMemo(() => {
        const value: ProvidedValue = {
            theme,
            toggleTheme: ToggleThemeCallback,
        };
        return value;
    }, [theme, ToggleThemeCallback]);

    return (
        <Context.Provider value={MemoizedValue}>
            {props.children}
        </Context.Provider>
    );
});

export const useTheme = () => useContext(Context);

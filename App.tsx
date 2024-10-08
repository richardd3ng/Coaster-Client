import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoot from "./src/screens/appRoot/AppRoot";
import { LIGHT_THEME } from "./src/constants/theme/lightTheme";
import store, { persistor } from "./src/state/store";
import { ThemeProvider } from "./src/hooks/context/ThemeContext"; // using our own theme provider, not ui-kitten's

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <ThemeProvider initial={LIGHT_THEME}>
                            <AppRoot />
                        </ThemeProvider>
                    </ApplicationProvider>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
};
export default App;

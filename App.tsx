import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import AppRoot from "./src/screens/appRoot/AppRoot";
import store, { persistor } from "./src/state/store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva.light}>
                    <AppRoot />
                </ApplicationProvider>
            </PersistGate>
        </Provider>
    );
};
export default App;

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";

import AppRoot from "./src/pages/appRoot/AppRoot";
import store from "./src/state/store";

const App = () => {
    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppRoot />
            </ApplicationProvider>
        </Provider>
    );
};
export default App;

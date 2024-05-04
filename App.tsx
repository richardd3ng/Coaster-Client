import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Provider } from "react-redux";

import store from "./src/state/store";
import AppRoot from "./src/pages/appRoot/AppRoot";

export default function App() {
    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppRoot />
            </ApplicationProvider>
        </Provider>
    );
}

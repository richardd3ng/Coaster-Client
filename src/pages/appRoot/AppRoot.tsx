import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import BottomSheetsAndModals from "../bottomSheetsAndModals/BottomSheetsAndModals";
import { BottomSheetProvider } from "../../hooks/context/BottomSheetContext";
import { EXPO_DEV_MODE } from "@env";
import MapScreen from "../mapScreen/MapScreen";
import { ModalProvider } from "../../hooks/context/ModalContext";
import RightButtonPanel from "../../components/map/rightButtonPanel/RightButtonPanel";
import styles from "./styles";
import { MapContextProvider } from "../../hooks/context/MapContext";
import useSplashScreen from "../../hooks/useSplashScreen";
import useTracking from "../../hooks/useTracking";

SplashScreen.preventAutoHideAsync();

const AppRoot = () => {
    const { loading, onLayoutRootView } = useSplashScreen();
    useTracking(EXPO_DEV_MODE === "false");

    if (loading) {
        return null;
    }
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="auto" />
            <MapContextProvider>
                <ModalProvider>
                    <BottomSheetProvider>
                        <MapScreen />
                        <BottomSheetsAndModals />
                    </BottomSheetProvider>
                </ModalProvider>
                <RightButtonPanel />
            </MapContextProvider>
        </View>
    );
};

export default AppRoot;

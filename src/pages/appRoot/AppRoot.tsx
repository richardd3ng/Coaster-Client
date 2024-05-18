import { useCallback, useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import BottomSheetsAndModals from "../bottomSheetsAndModals/BottomSheetsAndModals";
import { BottomSheetProvider } from "../../hooks/context/BottomSheetContext";
import { MapContextProvider } from "../../hooks/context/MapContext";
import MapScreen from "../mapScreen/MapScreen";
import { ModalProvider } from "../../hooks/context/ModalContext";
import RightButtonPanel from "../../components/map/rightButtonPanel/RightButtonPanel";
import styles from "./styles";
import superclusterManager from "../../utils/superclusterManager";

SplashScreen.preventAutoHideAsync();

const AppRoot = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            await superclusterManager.loadData();
            setLoading(false);
        };

        loadData();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (!loading) {
            await SplashScreen.hideAsync();
        }
    }, [loading]);

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
                        <RightButtonPanel />
                        <BottomSheetsAndModals />
                    </BottomSheetProvider>
                </ModalProvider>
            </MapContextProvider>
        </View>
    );
};

export default AppRoot;

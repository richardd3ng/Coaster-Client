import { useCallback, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";

import superclusterManager from "../utils/superclusterManager";

SplashScreen.preventAutoHideAsync();

const useSplashScreen = () => {
    const [loading, setLoading] = useState(true);

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

    return { loading, onLayoutRootView };
};

export default useSplashScreen;

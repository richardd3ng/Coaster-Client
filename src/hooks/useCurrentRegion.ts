import { useState, useEffect } from "react";

import { Region } from "react-native-maps";

import { getCurrentRegionState } from "../state/storeUtils";
import store from "../state/store";

const useCurrentRegion = () => {
    const [currentRegion, setCurrentRegion] = useState<Region | null>(null);

    useEffect(() => {
        const handleChange = () => {
            setCurrentRegion(getCurrentRegionState());
        };

        const unsubscribe = store.subscribe(handleChange);

        handleChange();

        return () => {
            unsubscribe();
        };
    }, []);

    return currentRegion;
};

export default useCurrentRegion;

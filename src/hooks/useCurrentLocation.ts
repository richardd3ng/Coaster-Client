import { useState, useEffect } from "react";

import { LatLng } from "react-native-maps";

import store from "../state/store";
import { getCurrentLocationState } from "../state/storeUtils";

const useCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);

    useEffect(() => {
        const handleChange = () => {
            setCurrentLocation(getCurrentLocationState());
        };

        const unsubscribe = store.subscribe(handleChange);

        handleChange();

        return () => {
            unsubscribe();
        };
    }, []);

    return currentLocation;
};

export default useCurrentLocation;

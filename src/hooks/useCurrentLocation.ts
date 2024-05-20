import { useState, useEffect } from "react";

import { LatLng } from "react-native-maps";

import store from "../state/store";
import { getHistoryState } from "../state/storeUtils";

const useCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);

    useEffect(() => {
        const handleChange = () => {
            const history = getHistoryState();
            const location =
                history.length > 0 ? history[history.length - 1].coords : null;
            setCurrentLocation(location);
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

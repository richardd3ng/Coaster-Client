import { LatLng, Region } from "react-native-maps";

import store from "./store";
import {
    clearHistoryBeforeTimestampAction,
    recordLocationTimestampAction,
    setCurrentRegionAction,
    setSelectedClusterAction,
    setSelectedJamMemIdAction,
} from "./actions";
import { LocationTimestamp } from "../types/custom";
import { SongCluster } from "../utils/superclusterManager";

/* dispatchers */
export const dispatchRecordLocationTimestamp = (
    locationTimestamp: LocationTimestamp
) => {
    store.dispatch(recordLocationTimestampAction(locationTimestamp));
};

export const dispatchClearHistoryBeforeTimestamp = (timestamp: number) => {
    store.dispatch(clearHistoryBeforeTimestampAction(timestamp));
};

export const dispatchSetCurrentRegion = (region: Region) => {
    store.dispatch(setCurrentRegionAction(region));
};

export const dispatchSetSelectedCluster = (cluster: SongCluster) => {
    store.dispatch(setSelectedClusterAction(cluster));
};

export const dispatchSetSelectedJamMemId = (id: number) => {
    store.dispatch(setSelectedJamMemIdAction(id));
};

/* accessors */
export const getHistoryState = (): LocationTimestamp[] => {
    return store.getState().location.history;
};

export const getCurrentLocationState = (): LatLng | null => {
    return store.getState().location.currentLocation;
};

export const getCurrentRegionState = (): Region | null => {
    return store.getState().location.currentRegion;
};

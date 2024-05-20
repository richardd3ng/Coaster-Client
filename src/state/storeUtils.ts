import { LatLng, Region } from "react-native-maps";

import store from "./store";
import {
    appendToHistoryAction,
    setCurrentRegionAction,
    setSelectedClusterAction,
    setSelectedJamMemIdAction,
} from "./actions";
import { LocationTimestamp } from "../types/custom";
import { SongCluster } from "../utils/superclusterManager";

/* dispatchers */
export const appendToHistoryState = (locationTimestamp: LocationTimestamp) => {
    store.dispatch(appendToHistoryAction(locationTimestamp));
};

export const setCurrentRegionState = (region: Region) => {
    store.dispatch(setCurrentRegionAction(region));
};

export const setSelectedClusterState = (cluster: SongCluster) => {
    store.dispatch(setSelectedClusterAction(cluster));
};

export const setSelectedJamMemIdState = (id: number) => {
    store.dispatch(setSelectedJamMemIdAction(id));
};

/* accessors */
export const getHistoryState = (): LocationTimestamp[] => {
    return store.getState().location.history;
};

export const getCurrentLocationState = (): LatLng | null => {
    const history = store.getState().location.history;
    return history.length > 0 ? history[history.length - 1].coords : null;
};

export const getCurrentRegionState = (): Region | null => {
    return store.getState().location.currentRegion;
};

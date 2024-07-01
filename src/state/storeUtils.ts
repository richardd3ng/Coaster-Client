import { LatLng, Region } from "react-native-maps";

import {
    clearHistoryAction,
    recordLocationTimestampAction,
    setCurrentRegionAction,
    setCurrentUserAction,
    setLastSnapshotTimestampAction,
    setSelectedClusterAction,
    setSelectedJamMemIdAction,
} from "./actions";
import { LocationTimestamp, UserReduxState } from "../types/entities";
import { SongCluster } from "../utils/superclusterManager";
import store from "./store";

/* dispatchers */
export const dispatchRecordLocationTimestamp = (
    locationTimestamp: LocationTimestamp
) => {
    store.dispatch(recordLocationTimestampAction(locationTimestamp));
};

export const dispatchClearHistory = () => {
    store.dispatch(clearHistoryAction());
};

export const dispatchSetLastSnapshotTimestamp = (timestamp: number) => {
    store.dispatch(setLastSnapshotTimestampAction(timestamp));
};

export const dispatchSetCurrentRegion = (region: Region) => {
    store.dispatch(setCurrentRegionAction(region));
};

export const dispatchSetSelectedCluster = (cluster: SongCluster | null) => {
    store.dispatch(setSelectedClusterAction(cluster));
};

export const dispatchSetSelectedJamMemId = (id: number) => {
    store.dispatch(setSelectedJamMemIdAction(id));
};

export const dispatchSetCurrentUser = (user: UserReduxState | null) => {
    store.dispatch(setCurrentUserAction(user));
};

/* accessors */
export const getHistoryState = (): LocationTimestamp[] => {
    return store.getState().location.history;
};

export const getLastSnapshotTimestampState = (): number | null => {
    return store.getState().snapshot.lastSnapshotTimestamp;
};

export const getCurrentLocationState = (): LatLng | null => {
    return store.getState().location.currentLocation;
};

export const getCurrentRegionState = (): Region | null => {
    return store.getState().location.currentRegion;
};

export const getCurrentUser = (): UserReduxState | null => {
    return store.getState().user.currentUser;
};

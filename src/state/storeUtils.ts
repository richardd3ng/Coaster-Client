import { LatLng, Region } from "react-native-maps";

import {
    clearHistoryAction,
    recordLocationTimestampAction,
    setCurrentRegionAction,
    setCurrentUserAction,
    setCurrentlyPlayingSongIdAction,
    setLastAttemptedSnapshotTimestampAction,
    setLastSuccessfulSnapshotTimestampAction,
    setSearchResultAction,
    setSelectedClusterAction,
    setSelectedJamMemIdAction,
} from "./actions";
import { LocationTimestamp, UserReduxState } from "../types/entities";
import { SongCluster } from "../utils/superclusterManager";
import store from "./store";
import { SearchResult } from "../gql/graphql";

/* dispatchers */
export const dispatchRecordLocationTimestamp = (
    locationTimestamp: LocationTimestamp
) => {
    store.dispatch(recordLocationTimestampAction(locationTimestamp));
};

export const dispatchClearHistory = () => {
    store.dispatch(clearHistoryAction());
};

export const dispatchSetLastAttemptedSnapshotTimestamp = (
    timestamp: number
) => {
    store.dispatch(setLastAttemptedSnapshotTimestampAction(timestamp));
};

export const dispatchSetLastSuccessfulSnapshotTimestamp = (
    timestamp: number
) => {
    store.dispatch(setLastSuccessfulSnapshotTimestampAction(timestamp));
};

export const dispatchSetCurrentRegion = (region: Region) => {
    store.dispatch(setCurrentRegionAction(region));
};

export const dispatchSetSelectedCluster = (cluster: SongCluster | null) => {
    store.dispatch(setSelectedClusterAction(cluster));
};

export const dispatchSetSelectedJamMemId = (id: string) => {
    store.dispatch(setSelectedJamMemIdAction(id));
};

export const dispatchSetCurrentUser = (user: UserReduxState | null) => {
    store.dispatch(setCurrentUserAction(user));
};

export const dispatchSetCurrentlyPlayingSongId = (songId: string) => {
    store.dispatch(setCurrentlyPlayingSongIdAction(songId));
};

export const dispatchSetSearchResult = (searchResult: SearchResult | null) => {
    store.dispatch(setSearchResultAction(searchResult));
}

/* accessors (Note: generally use useSelector() if inside a component) */ 
export const getHistoryState = (): LocationTimestamp[] => {
    return store.getState().location.history;
};

export const getLastAttemptedSnapshotTimestampState = (): number | null => {
    return store.getState().snapshot.lastAttemptedSnapshotTimestamp;
};

export const getCurrentLocationState = (): LatLng | null => {
    return store.getState().location.currentLocation;
};

export const getCurrentRegionState = (): Region | null => {
    return store.getState().location.currentRegion;
};

export const getCurrentUserState = (): UserReduxState | null => {
    return store.getState().user.currentUser;
};

export const getCurrentPlayingSongIdState = (): string => {
    return store.getState().song.currentlyPlayingSongId;
};

import { LatLng, Region } from "react-native-maps";

import {
    clearHistoryAction,
    recordLocationTimestampAction,
    setCurrentRegionAction,
    setUserLocalDataAction,
    setUserServerDataAction,
    setCurrentlyPlayingSongIdAction,
    setLastAttemptedSnapshotTimestampAction,
    setLastSuccessfulSnapshotTimestampAction,
    setSearchResultAction,
    logOutUserAction,
} from "./actions";
import { LocalUserState } from "./user/userSlice";
import { LocationTimestamp } from "../types/entities";
import store from "./store";
import { SearchResult, UserReduxStateFragment } from "../gql/graphql";

/* dispatchers */
export const dispatchRecordLocationTimestamp = (
    locationTimestamp: LocationTimestamp
) => {
    store.dispatch(recordLocationTimestampAction(locationTimestamp));
};

export const dispatchClearHistory = () => {
    store.dispatch(clearHistoryAction());
};

export const dispatchLogOutUser = () => {
    store.dispatch(logOutUserAction());
}

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

export const dispatchSetUserLocalData = (
    userLocalData: Partial<LocalUserState>
) => {
    store.dispatch(setUserLocalDataAction(userLocalData));
};

export const dispatchSetUserServerData = (
    userServerData: UserReduxStateFragment
) => {
    store.dispatch(setUserServerDataAction(userServerData));
};

export const dispatchSetCurrentlyPlayingSongId = (songId: string) => {
    store.dispatch(setCurrentlyPlayingSongIdAction(songId));
};

export const dispatchSetSearchResult = (searchResult: SearchResult | null) => {
    store.dispatch(setSearchResultAction(searchResult));
};

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

export const getCurrentPlayingSongIdState = (): string => {
    return store.getState().song.currentlyPlayingSongId;
};

export const getUserId = (): string | null => {
    return store.getState().user.userServerData?._id ?? null;
};

export const getUserSpotifyId = (): string | null => {
    return store.getState().user.userServerData?.spotifyId ?? null;
};

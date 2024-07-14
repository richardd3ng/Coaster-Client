// for use in ./storeUtils.ts only

import { Region } from "react-native-maps";

import {
    clearHistory,
    recordLocationTimestamp,
} from "./location/locationSlice";
import { LocationTimestamp, UserReduxState } from "../types/entities";
import { setCurrentlyPlayingSongId } from "./song/songSlice";
import { setCurrentRegion } from "./location/locationSlice";
import { setCurrentUser } from "./user/userSlice";
import {
    setLastAttemptedSnapshotTimestamp,
    setLastSuccessfulSnapshotTimestamp,
} from "./snapshot/snapshotSlice";
import { SearchResult } from "../gql/graphql";
import { setSearchResult } from "./searchResult/searchResultSlice";

export const recordLocationTimestampAction = (
    locationTimestamp: LocationTimestamp
) => {
    return {
        type: recordLocationTimestamp.type,
        payload: locationTimestamp,
    };
};

export const clearHistoryAction = () => {
    return {
        type: clearHistory.type,
    };
};

export const setCurrentlyPlayingSongIdAction = (songId: string) => {
    return {
        type: setCurrentlyPlayingSongId.type,
        payload: songId,
    };
};

export const setCurrentRegionAction = (region: Region) => {
    return {
        type: setCurrentRegion.type,
        payload: region,
    };
};

export const setCurrentUserAction = (user: UserReduxState | null) => {
    return {
        type: setCurrentUser.type,
        payload: user,
    };
};

export const setLastAttemptedSnapshotTimestampAction = (timestamp: number) => {
    return {
        type: setLastAttemptedSnapshotTimestamp.type,
        payload: timestamp,
    };
};

export const setLastSuccessfulSnapshotTimestampAction = (timestamp: number) => {
    return {
        type: setLastSuccessfulSnapshotTimestamp.type,
        payload: timestamp,
    };
};

export const setSearchResultAction = (searchResult: SearchResult | null) => {
    return {
        type: setSearchResult.type,
        payload: searchResult,
    };
};

// for use in ./storeUtils.ts only

import { Region } from "react-native-maps";

import {
    clearHistory,
    recordLocationTimestamp,
} from "./location/locationSlice";
import { LocationTimestamp } from "../types/entities";
import { setCurrentlyPlayingSongId } from "./song/songSlice";
import { setCurrentRegion } from "./location/locationSlice";
import {
    LocalUserState,
    logOutUser,
    setUserLocalData,
    setUserServerData,
} from "./user/userSlice";
import {
    setLastAttemptedSnapshotTimestamp,
    setLastSuccessfulSnapshotTimestamp,
} from "./snapshot/snapshotSlice";
import { SearchResult, UserReduxStateFragment } from "../gql/graphql";
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

export const logOutUserAction = () => {
    return {
        type: logOutUser.type,
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

export const setUserLocalDataAction = (
    userLocalData: Partial<LocalUserState>
) => {
    return {
        type: setUserLocalData.type,
        payload: userLocalData,
    };
};

export const setUserServerDataAction = (
    userServerData: UserReduxStateFragment
) => {
    return {
        type: setUserServerData.type,
        payload: userServerData,
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

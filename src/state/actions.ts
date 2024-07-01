// for use in ./storeUtils.ts only

import { Region } from "react-native-maps";

import {
    recordLocationTimestamp,
    clearHistory,
} from "./location/locationSlice";
import { LocationTimestamp, UserReduxState } from "../types/entities";
import { setCurrentRegion } from "./location/locationSlice";
import { setLastSnapshotTimestamp } from "./snapshot/snapshotSlice";
import { setSelectedJamMemId } from "./jamMem/jamMemSlice";
import { setSelectedCluster } from "./cluster/clusterSlice";
import { setCurrentUser } from "./user/userSlice";
import { SongCluster } from "../utils/superclusterManager";

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

export const setCurrentRegionAction = (region: Region) => {
    return {
        type: setCurrentRegion.type,
        payload: region,
    };
};

export const setSelectedClusterAction = (cluster: SongCluster | null) => {
    return {
        type: setSelectedCluster.type,
        payload: cluster,
    };
};

export const setSelectedJamMemIdAction = (id: number) => {
    return {
        type: setSelectedJamMemId.type,
        payload: id,
    };
};

export const setCurrentUserAction = (user: UserReduxState | null) => {
    return {
        type: setCurrentUser.type,
        payload: user,
    };
};

export const setLastSnapshotTimestampAction = (timestamp: number) => {
    return {
        type: setLastSnapshotTimestamp.type,
        payload: timestamp,
    };
};

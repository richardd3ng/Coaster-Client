// for use in ./storeUtils.ts only

import { Region } from "react-native-maps";

import {
    appendToHistory,
    clearHistoryBeforeTimestamp,
} from "./location/locationSlice";
import { LocationTimestamp } from "../types/custom";
import { setCurrentRegion } from "./location/locationSlice";
import { setSelectedJamMemId } from "./jamMem/jamMemSlice";
import { setSelectedCluster } from "./cluster/clusterSlice";
import { SongCluster } from "../utils/superclusterManager";

export const appendToHistoryAction = (locationTimestamp: LocationTimestamp) => {
    return {
        type: appendToHistory.type,
        payload: locationTimestamp,
    };
};

export const clearHistoryBeforeTimestampAction = (timestamp: number) => {
    return {
        type: clearHistoryBeforeTimestamp.type,
        payload: timestamp,
    };
};

export const setCurrentRegionAction = (region: Region) => {
    return {
        type: setCurrentRegion.type,
        payload: region,
    };
};

export const setSelectedClusterAction = (cluster: SongCluster) => {
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

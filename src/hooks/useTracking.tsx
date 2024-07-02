import { useEffect } from "react";

import { Alert } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

import { EXPO_DEV_MODE } from "@env";
import {
    dispatchRecordLocationTimestamp,
    dispatchSetLastSnapshotTimestamp,
    getHistoryState,
    getLastSnapshotTimestampState,
} from "../state/storeUtils";
import { LocationTimestamp } from "../types/entities";
import { postSnapshots } from "../api/snapshotAPI";
import {
    POST_SNAPSHOTS_COOLDOWN,
    POST_SNAPSHOTS_INTERVAL,
} from "../utils/timeConstants";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const LOCATION_TASK_NAME = "location";

interface LocationTaskData {
    locations: Location.LocationObject[];
    error: TaskManager.TaskManagerError | null;
}

TaskManager.defineTask(
    LOCATION_TASK_NAME,
    async ({ data }: { data: LocationTaskData }) => {
        const { locations, error } = data;
        if (error) {
            Alert.alert("Error receiving location updates");
            console.error("Error receiving location updates:", error.message);
            return;
        }
        const locationTimestamp: LocationTimestamp = {
            coords: {
                latitude: locations[0].coords.latitude,
                longitude: locations[0].coords.longitude,
            },
            timestamp: locations[0].timestamp,
        };
        dispatchRecordLocationTimestamp(locationTimestamp);
        const history = getHistoryState();
        if (
            history[history.length - 1].timestamp - history[0].timestamp >=
            POST_SNAPSHOTS_INTERVAL
        ) {
            const lastSnapshotTimestamp = getLastSnapshotTimestampState();
            if (
                lastSnapshotTimestamp === null ||
                Date.now() - lastSnapshotTimestamp > POST_SNAPSHOTS_COOLDOWN
            ) {
                dispatchSetLastSnapshotTimestamp(Date.now());
                await postSnapshots();
            }
        }
    }
);

const useTracking = () => {
    const tracking =
        useSelector(
            (state: RootState) =>
                state.user.currentUser?.preferences.trackSnapshots
        ) || false;

    useEffect(() => {
        if (!tracking || EXPO_DEV_MODE === "true") {
            return;
        }
        const startLocationUpdates = async () => {
            if (
                !(await Location.requestForegroundPermissionsAsync()).granted ||
                !(await Location.requestBackgroundPermissionsAsync()).granted
            ) {
                Alert.alert("Permission to access location was denied");
                console.error("Permission to access location was denied");
                return;
            }
            await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                accuracy: Location.Accuracy.Balanced,
            });
            console.log("Started receiving location updates");
        };
        startLocationUpdates();

        return () => {
            Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
            console.log("Stopped receiving location updates");
        };
    }, [tracking]);
};

export default useTracking;

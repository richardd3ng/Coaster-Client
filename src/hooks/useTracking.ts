import { useEffect, useState } from "react";

import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { Alert } from "react-native";

import {
    dispatchRecordLocationTimestamp,
    getHistoryState,
} from "../state/storeUtils";
import { EXPO_DEV_MODE } from "@env";

const LOCATION_TASK_NAME = "location";
const LOCATION_UPDATE_INTERVAL_MILLISECONDS = 300_000; // 5 min

interface LocationTaskData {
    locations: Location.LocationObject[];
    error: TaskManager.TaskManagerError | null;
}

TaskManager.defineTask(
    LOCATION_TASK_NAME,
    ({ data }: { data: LocationTaskData }) => {
        const { locations, error } = data;
        if (error) {
            Alert.alert("Error receiving location updates");
            console.error("Error receiving location updates:", error.message);
            return;
        }
        const timestamp = locations[0].timestamp;
        const history = getHistoryState();
        if (
            history.length == 0 ||
            timestamp - history[history.length - 1].timestamp >=
                LOCATION_UPDATE_INTERVAL_MILLISECONDS
        ) {
            dispatchRecordLocationTimestamp({
                coords: {
                    latitude: locations[0].coords.latitude,
                    longitude: locations[0].coords.longitude,
                },
                timestamp,
            });
        }
    }
);

const useTracking = (): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
] => {
    const [tracking, setTracking] = useState<boolean>(false);

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

    return [tracking, setTracking];
};

export default useTracking;

import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

import { LocationTimestamp } from "../types/custom";
import { appendToHistory } from "../state/location/locationSlice";
import store, { RootState } from "../state/store";
import { LatLng } from "react-native-maps";

const LOCATION_TASK_NAME = "location-tracking";
const LOCATION_UPDATE_TIME_INTERVAL_MILLISECONDS = 10000;
const LOCATION_UPDATE_DISTANCE_INTERVAL_METERS = 50;

type LocationTaskData = {
    locations: Location.LocationObject[];
    error: TaskManager.TaskManagerError | null;
};

TaskManager.defineTask(
    LOCATION_TASK_NAME,
    ({ data }: { data: LocationTaskData }) => {
        const { locations, error } = data;
        if (error) {
            Alert.alert("Error receiving location updates");
            console.error("Error receiving location updates:", error.message);
            return;
        }
        const payload: LocationTimestamp = {
            coords: {
                latitude: locations[0].coords.latitude,
                longitude: locations[0].coords.longitude,
            },
            timestamp: locations[0].timestamp,
        };
        store.dispatch({
            type: appendToHistory.type,
            payload: payload,
        });
    }
);

const useTracking = (isActive: boolean) => {
    const currentLocation: LatLng | null = useSelector((state: RootState) => {
        const history = state.location.history;
        return history.length > 0 ? history[history.length - 1].coords : null;
    });

    useEffect(() => {
        if (!isActive) {
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
                timeInterval: LOCATION_UPDATE_TIME_INTERVAL_MILLISECONDS,
                distanceInterval: LOCATION_UPDATE_DISTANCE_INTERVAL_METERS,
            });
            console.log("Started receiving location updates");
        };
        startLocationUpdates();

        return () => {
            Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
            console.log("Stopped receiving location updates");
        };
    }, [isActive]);

    return currentLocation;
};

export default useTracking;

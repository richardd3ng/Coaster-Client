import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

import { setCurrentLocation } from "../state/location/currentLocationSlice";
import store, { RootState } from "../state/store";

const LOCATION_TASK_NAME = "location-tracking";

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
        store.dispatch({
            type: setCurrentLocation.type,
            payload: {
                latitude: locations[0].coords.latitude,
                longitude: locations[0].coords.longitude,
                timestamp: locations[0].timestamp,
            },
        });
    }
);

const useTracking = (isActive: boolean) => {
    const currentLocation = useSelector(
        (state: RootState) => state.currentLocation
    );

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
                timeInterval: 5000,
                distanceInterval: 50,
            });
            console.log("Started receiving location updates");
        };
        startLocationUpdates();

        return () => {
            Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
            console.log("Stopped receiving location updates");
        };
    }, [isActive]);

    console.log("location:", currentLocation);
    return currentLocation;
};

export default useTracking;

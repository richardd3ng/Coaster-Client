import React, {
    createContext,
    Dispatch,
    useContext,
    useEffect,
    useState,
    ReactNode,
    SetStateAction,
} from "react";

import { Alert } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";

import { EXPO_DEV_MODE } from "@env";
import { dispatchRecordLocationTimestamp } from "../../state/storeUtils";
import { LocationTimestamp } from "../../types/entities";

const LOCATION_TASK_NAME = "location";

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
        const locationTimestamp: LocationTimestamp = {
            coords: {
                latitude: locations[0].coords.latitude,
                longitude: locations[0].coords.longitude,
            },
            timestamp: locations[0].timestamp,
        };
        dispatchRecordLocationTimestamp(locationTimestamp);
    }
);

interface TrackingContextType {
    tracking: boolean;
    setTracking: Dispatch<SetStateAction<boolean>>;
}

const TrackingContext = createContext<TrackingContextType | undefined>(
    undefined
);

export const useTracking = (): TrackingContextType => {
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

    return { tracking, setTracking };
};

export const TrackingProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const trackingContextValue = useTracking();

    return (
        <TrackingContext.Provider value={trackingContextValue}>
            {children}
        </TrackingContext.Provider>
    );
};

export const useTrackingContext = (): TrackingContextType => {
    const context = useContext(TrackingContext);
    if (!context) {
        throw new Error(
            "useTrackingContext must be used within a TrackingProvider"
        );
    }
    return context;
};
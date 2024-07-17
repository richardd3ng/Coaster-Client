import { useCallback, useEffect, useState } from "react";

import { Alert } from "react-native";
import BackgroundGeolocation, {
    Location,
} from "react-native-background-geolocation";

import {
    dispatchRecordLocationTimestamp,
    dispatchSetLastAttemptedSnapshotTimestamp,
    getHistoryState,
    getLastAttemptedSnapshotTimestampState,
} from "../state/storeUtils";
import {
    LOCATION_UPDATE_INTERVAL_STATIONARY,
    POST_SNAPSHOTS_COOLDOWN,
    POST_SNAPSHOTS_INTERVAL,
} from "../constants/time";
import { postSnapshots } from "../api/snapshotAPI";
import { showGeolocationErrorToast } from "../utils/toastUtils";
import { useTrackSnapshots } from "./redux/useSelectorHooks";

/**
 * Handles the update of the location timestamp. Records the location timestamp and posts snapshots if the history spans a long enough time period. postSnapshots() will only be called if the last attempted call was taken more than POST_SNAPSHOTS_COOLDOWN milliseconds ago (when errors occur).
 * @param locationTimestamp The incoming location timestamp
 */
const handleLocationUpdate = async (location: Location) => {
    dispatchRecordLocationTimestamp({
        coords: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        },
        timestamp: new Date(location.timestamp).getTime(),
    });
    const history = getHistoryState();
    if (
        history[history.length - 1].timestamp - history[0].timestamp >=
        POST_SNAPSHOTS_INTERVAL
    ) {
        const lastSnapshotTimestamp = getLastAttemptedSnapshotTimestampState();
        if (
            lastSnapshotTimestamp === null ||
            Date.now() - lastSnapshotTimestamp > POST_SNAPSHOTS_COOLDOWN
        ) {
            dispatchSetLastAttemptedSnapshotTimestamp(Date.now());
            await postSnapshots();
        }
    }
};

const useTracking = () => {
    const trackSnapshots = useTrackSnapshots();

    const [isError, setIsError] = useState<boolean>(false);

    const onLocationUpdate = useCallback(
        (location: Location) => {
            if (isError) {
                setIsError(false);
            }
            handleLocationUpdate(location);
        },
        [isError]
    );

    useEffect(() => {
        const stopTracking = () => {
            console.log("Stopped receiving location updates");
            BackgroundGeolocation.stop();
        };

        if (!trackSnapshots) {
            stopTracking();
            return;
        }

        BackgroundGeolocation.onHeartbeat(() => {
            BackgroundGeolocation.getCurrentPosition({
                samples: 1,
                persist: true,
            }).then(onLocationUpdate);
        });

        BackgroundGeolocation.onLocation(onLocationUpdate, (error) => {
            if (isError) {
                return;
            }
            setIsError(true);
            showGeolocationErrorToast(error);
        });

        const startTracking = async () => {
            try {
                await BackgroundGeolocation.ready({
                    desiredAccuracy:
                        BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
                    heartbeatInterval: LOCATION_UPDATE_INTERVAL_STATIONARY,
                    preventSuspend: true,
                });
                console.log("Started receiving location updates");
                await BackgroundGeolocation.start();
            } catch (error) {
                console.error(
                    "Error initializing BackgroundGeolocation:",
                    error
                );
                Alert.alert(
                    "Error",
                    "Failed to initialize location tracking. Refresh the app and if the issue persists, submit a bug request."
                );
            }
        };
        startTracking();

        return () => {
            stopTracking();
        };
    }, [trackSnapshots]);
};

export default useTracking;

import { useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";
import { postLocations } from "../api/locationsAPI";

const FOREGROUND_SNAPSHOT_INTERVAL_MILLISECONDS = 30 * 60 * 1000;

let intervalId: NodeJS.Timeout | null = null;
let referenceCount = 0;

const startForegroundInterval = () => {
    if (intervalId === null) {
        console.log("Started foreground location posting scheduler");
        postLocations();
        intervalId = setInterval(
            postLocations,
            FOREGROUND_SNAPSHOT_INTERVAL_MILLISECONDS
        );
    }
    referenceCount++;
};

const stopForegroundInterval = () => {
    referenceCount--;
    if (referenceCount <= 0 && intervalId !== null) {
        console.log("Stopped foreground location posting scheduler");
        clearInterval(intervalId);
        intervalId = null;
        referenceCount = 0;
    }
};

const useLocationPostingForeground = () => {
    useEffect(() => {
        const handleAppStateChange = (nextAppState: AppStateStatus) => {
            if (nextAppState === "active") {
                startForegroundInterval();
            } else {
                stopForegroundInterval();
            }
        };

        const subscription = AppState.addEventListener(
            "change",
            handleAppStateChange
        );

        if (AppState.currentState === "active") {
            startForegroundInterval();
        }

        return () => {
            stopForegroundInterval();
            subscription.remove();
        };
    }, []);

    return {
        stopInterval: stopForegroundInterval,
    };
};

export default useLocationPostingForeground;

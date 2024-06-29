import { useEffect } from "react";

import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import { Alert } from "react-native";

import { postLocations } from "../api/locationsAPI";

const LOCATION_POSTING_BACKGROUND_TASK_NAME = "snapshot-background";

TaskManager.defineTask(LOCATION_POSTING_BACKGROUND_TASK_NAME, async () => {
    try {
        postLocations();
        console.log("succesfully posted locations in the background");
        return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
        Alert.alert("Error", (error as Error).message);
        return BackgroundFetch.BackgroundFetchResult.Failed;
    }
});

const registerBackgroundFetchAsync = async () => {
    try {
        await BackgroundFetch.registerTaskAsync(
            LOCATION_POSTING_BACKGROUND_TASK_NAME,
            {
                minimumInterval: 900, // 15 minutes
                stopOnTerminate: false,
                startOnBoot: true,
            }
        );
        console.log("Started background location posting scheduler");
    } catch (error) {
        console.error("Failed to register task:", error);
    }
};

const unregisterBackgroundFetchAsync = async () => {
    try {
        await BackgroundFetch.unregisterTaskAsync(
            LOCATION_POSTING_BACKGROUND_TASK_NAME
        );
        console.log("Stopped background location posting scheduler");
    } catch (error) {
        console.error("Failed to unregister task:", error);
    }
};

const useLocationPostingBackground = () => {
    useEffect(() => {
        registerBackgroundFetchAsync();

        return () => {
            unregisterBackgroundFetchAsync();
        };
    }, []);
};

export default useLocationPostingBackground;

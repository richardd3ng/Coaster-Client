// import { useEffect } from "react";

// import * as BackgroundFetch from "expo-background-fetch";
// import * as TaskManager from "expo-task-manager";
// import { Alert } from "react-native";

// import { clearHistoryBeforeTimestamp } from "../state/location/locationSlice";
// import { getClosestLocationTimestamp } from "../utils/snapshotUtils";
// import { SongTimestamp, fetchRecentlyPlayedSongs } from "../utils/songUtils";
// import { SnapShot } from "../types/custom";
// import store from "../state/store";
// import { takeSnapshot } from "../state/snapshot/snapshotSlice";

// const SNAPSHOT_BACKGROUND_TASK_NAME = "snapshot-background";

// const generateSnapshots = (songTimestamps: SongTimestamp[]): SnapShot[] => {
//     const snapshots: SnapShot[] = [];
//     let maxSongTimestamp = 0;
//     songTimestamps.forEach((songTimestamp) => {
//         maxSongTimestamp = Math.max(maxSongTimestamp, songTimestamp.timestamp);
//         const locationTimestamp = getClosestLocationTimestamp(
//             songTimestamp.timestamp
//         );
//         snapshots.push({
//             locationTimestamp,
//             songId: songTimestamp.songId,
//         });
//     });
//     if (maxSongTimestamp > 0) {
//         store.dispatch({
//             type: clearHistoryBeforeTimestamp.type,
//             payload: maxSongTimestamp,
//         });
//     }
//     return snapshots;
// };

// TaskManager.defineTask(SNAPSHOT_BACKGROUND_TASK_NAME, async () => {
//     try {
//         const lastSnapshotTimestamp =
//             store.getState().snapshot.lastSnapshotTimestamp;
//         console.log("read last snapshot timestamp:", lastSnapshotTimestamp);
//         const now = Date.now();
//         const songTimestamps = await fetchRecentlyPlayedSongs(
//             lastSnapshotTimestamp
//         ); // do background fetch here
//         const snapshots: SnapShot[] = generateSnapshots(songTimestamps);

//         // post snapshots to DB all at once
//         store.dispatch({
//             type: takeSnapshot.type,
//             payload: now,
//         });
//         return snapshots.length > 0
//             ? BackgroundFetch.BackgroundFetchResult.NewData
//             : BackgroundFetch.BackgroundFetchResult.NoData;
//     } catch (error) {
//         Alert.alert("Error", (error as Error).message);
//         return BackgroundFetch.BackgroundFetchResult.Failed;
//     }
// });

// const registerBackgroundFetchAsync = async () => {
//     await BackgroundFetch.registerTaskAsync(SNAPSHOT_BACKGROUND_TASK_NAME, {
//         minimumInterval: 900, // s -> 15 min
//         stopOnTerminate: false,
//         startOnBoot: true,
//     });
//     console.log("Started snapshot scheduler");
// };

// const unregisterBackgroundFetchAsync = async () => {
//     return BackgroundFetch.unregisterTaskAsync(SNAPSHOT_BACKGROUND_TASK_NAME);
// };

// const useSnapshot = () => {
//     useEffect(() => {
//         registerBackgroundFetchAsync();

//         return () => {
//             unregisterBackgroundFetchAsync();
//             TaskManager.unregisterTaskAsync(SNAPSHOT_BACKGROUND_TASK_NAME);
//             console.log("Stopped snapshot scheduler");
//         };
//     }, []);

//     return null;
// };

// export default useSnapshot;

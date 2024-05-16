// import { useEffect, useRef } from "react";
// import { AppState, AppStateStatus } from "react-native";

// const useSnapshotForeground = (delay: number) => {
//     const intervalId = useRef<NodeJS.Timeout | null>(null);

//     useEffect(() => {
//         function takeSnapshotForeground() {
//             console.log(
//                 "This will run every 30 seconds if the app is in the foreground"
//             );
//         }

//         function startInterval() {
//             if (intervalId.current === null) {
//                 intervalId.current = setInterval(takeSnapshotForeground, delay);
//             }
//         }

//         function stopInterval() {
//             if (intervalId.current !== null) {
//                 clearInterval(intervalId.current);
//                 intervalId.current = null;
//             }
//         }

//         function handleAppStateChange(nextAppState: AppStateStatus) {
//             if (nextAppState === "active") {
//                 startInterval();
//             } else {
//                 stopInterval();
//             }
//         }

//         const subscription = AppState.addEventListener(
//             "change",
//             handleAppStateChange
//         );

//         // Start the interval if the app is active
//         if (AppState.currentState === "active") {
//             startInterval();
//         }

//         return () => {
//             stopInterval();
//             subscription.remove();
//         };
//     }, [delay]);
// };

// export default useSnapshotForeground;

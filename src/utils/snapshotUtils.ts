import { getHistoryState } from "../state/storeUtils";
import { LocationTimestamp } from "../types/custom";

export const getClosestLocationTimestamp = (
    timestamp: number
): LocationTimestamp => {
    // const THRESHOLD = 600000; // closest timestamp must be within 10 minutes
    const THRESHOLD = Infinity;
    const history = getHistoryState();
    let left = 0,
        right = history.length - 1;
    while (left < right) {
        const mid = left + Math.trunc((right - left) / 2);
        if (
            history[mid + 1].timestamp - timestamp <=
            timestamp - history[mid].timestamp
        ) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (Math.abs(history[left].timestamp - timestamp) < THRESHOLD) {
        return history[left];
    }
    throw new Error("No timestamp close enough to the given timestamp found.");
};

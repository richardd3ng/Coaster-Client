import { dispatchClearHistory, getHistoryState } from "../state/storeUtils";

export const postLocations = () => {
    try {
        console.log(
            "posting to database history length:",
            getHistoryState().length
        );
        dispatchClearHistory();
    } catch (error) {
        console.error(error);
    }
};

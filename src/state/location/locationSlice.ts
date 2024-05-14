import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocationTimestamp } from "../../types/custom";

export type LocationState = {
    history: LocationTimestamp[];
};

const initialState: LocationState = {
    history: [],
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        appendToHistory: (state, action: PayloadAction<LocationTimestamp>) => {
            const { coords, timestamp } = action.payload;
            if (state.history.length % 50 === 0) {
                console.log("history length:", state.history.length);
            }
            return {
                history: [
                    ...state.history,
                    {
                        coords,
                        timestamp,
                    },
                ],
            };
        },
        clearHistoryBeforeTimestamp: (state, action: PayloadAction<number>) => {
            const index = state.history.findIndex(
                (locationTimestamp) =>
                    locationTimestamp.timestamp >= action.payload
            );
            return {
                history: index === -1 ? [] : state.history.slice(index),
            };
        },
    },
});

export const { appendToHistory, clearHistoryBeforeTimestamp } =
    locationSlice.actions;

export default locationSlice.reducer;

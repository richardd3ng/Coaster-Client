import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Region } from "react-native-maps";

import { LocationTimestamp } from "../../types/custom";

export type LocationState = {
    history: LocationTimestamp[];
    currentRegion: Region | null;
};

const initialState: LocationState = {
    history: [],
    currentRegion: null,
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        appendToHistory: (state, action: PayloadAction<LocationTimestamp>) => {
            const { coords, timestamp } = action.payload;
            console.log("history length:", state.history.length);
            return {
                history: [
                    ...state.history,
                    {
                        coords,
                        timestamp,
                    },
                ],
                currentRegion: state.currentRegion,
            };
        },
        clearHistoryBeforeTimestamp: (state, action: PayloadAction<number>) => {
            const index = state.history.findIndex(
                (locationTimestamp) =>
                    locationTimestamp.timestamp >= action.payload
            );
            return {
                history: index === -1 ? [] : state.history.slice(index),
                currentRegion: state.currentRegion,
            };
        },
        setCurrentRegion: (state, action: PayloadAction<Region>) => {
            return {
                history: state.history,
                currentRegion: action.payload,
            };
        },
    },
});

export const {
    appendToHistory,
    clearHistoryBeforeTimestamp,
    setCurrentRegion,
} = locationSlice.actions;

export default locationSlice.reducer;

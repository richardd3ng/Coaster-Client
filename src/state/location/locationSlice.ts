import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LatLng, Region } from "react-native-maps";

import { LocationTimestamp } from "../../types/custom";

export type LocationState = {
    history: LocationTimestamp[];
    currentLocation: LatLng | null;
    currentRegion: Region | null;
};

const initialState: LocationState = {
    history: [],
    currentLocation: null,
    currentRegion: null,
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        recordLocationTimestamp: (
            state,
            action: PayloadAction<LocationTimestamp>
        ) => {
            const { coords, timestamp } = action.payload;
            console.log("coords:", coords, "timestamp:", timestamp);
            console.log("history length:", state.history.length + 1);
            return {
                history: [
                    ...state.history,
                    {
                        coords,
                        timestamp,
                    },
                ],
                currentLocation: coords,
                currentRegion: state.currentRegion,
            };
        },
        clearHistory: (state) => {
            return {
                history: [],
                currentLocation: state.currentLocation,
                currentRegion: state.currentRegion,
            };
        },
        setCurrentRegion: (state, action: PayloadAction<Region>) => {
            return {
                history: state.history,
                currentLocation: state.currentLocation,
                currentRegion: action.payload,
            };
        },
    },
});

export const { recordLocationTimestamp, clearHistory, setCurrentRegion } =
    locationSlice.actions;

export default locationSlice.reducer;

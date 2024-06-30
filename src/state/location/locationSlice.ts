import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LatLng, Region } from "react-native-maps";

import { LocationTimestamp } from "../../types/entities";
import { LOCATION_UPDATE_INTERVAL } from "../../utils/timeConstants";

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
            const newHistory = [...state.history];
            if (
                state.history.length === 0 ||
                timestamp - state.history[state.history.length - 1].timestamp >
                    LOCATION_UPDATE_INTERVAL
            ) {
                newHistory.push(action.payload);
                console.log(
                    "recorded coords:",
                    coords,
                    "timestamp:",
                    timestamp,
                    "history length:",
                    newHistory.length
                );
            }
            return {
                history: newHistory,
                currentLocation: coords,
                currentRegion: state.currentRegion,
            };
        },
        clearHistory: (state) => {
            console.log("clearing history");
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

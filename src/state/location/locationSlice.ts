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
            console.log("history length:", state.history.length);
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
        clearHistoryBeforeTimestamp: (state, action: PayloadAction<number>) => {
            const index = state.history.findIndex(
                (locationTimestamp) =>
                    locationTimestamp.timestamp >= action.payload
            );
            return {
                history: index === -1 ? [] : state.history.slice(index),
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

export const {
    recordLocationTimestamp,
    clearHistoryBeforeTimestamp,
    setCurrentRegion,
} = locationSlice.actions;

export default locationSlice.reducer;

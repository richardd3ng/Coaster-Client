import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrentLocationState = {
    latitude: number | null;
    longitude: number | null;
    timestamp: number | null;
};

const initialState: CurrentLocationState = {
    latitude: null,
    longitude: null,
    timestamp: null,
};

const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState,
    reducers: {
        setCurrentLocation: (
            _state,
            action: PayloadAction<CurrentLocationState>
        ) => {
            return action.payload;
        },
    },
});

export const { setCurrentLocation } = currentLocationSlice.actions;

export default currentLocationSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLng } from "react-native-maps";

export type CurrentLocationState = {
    coords: LatLng | null;
    timestamp: number | null;
};

const initialState: CurrentLocationState = {
    coords: null,
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
            console.log("tracked location:", action.payload);
            return action.payload;
        },
    },
});

export const { setCurrentLocation } = currentLocationSlice.actions;

export default currentLocationSlice.reducer;

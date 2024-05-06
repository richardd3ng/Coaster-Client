import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLng } from "react-native-maps";

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
        appendToHistory: (
            state,
            action: PayloadAction<{
                coords: LatLng;
                timestamp: number;
            }>
        ) => {
            const { coords, timestamp } = action.payload;
            console.log(
                `tracked snapshot: latitude: ${action.payload.coords.latitude}, longitude: ${action.payload.coords.longitude}, timestamp: ${action.payload.timestamp}`
            );
            console.log("history length:", state.history.length);
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
    },
});

export const { appendToHistory } = locationSlice.actions;

export default locationSlice.reducer;

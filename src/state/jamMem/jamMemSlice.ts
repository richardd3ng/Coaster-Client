import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const INVALID_JAM_MEM_ID = -1;

export type JamMemState = {
    selectedJamMemId: number;
};

const initialState: JamMemState = {
    selectedJamMemId: INVALID_JAM_MEM_ID,
};

const jamMemSlice = createSlice({
    name: "jamMem",
    initialState,
    reducers: {
        setSelectedJamMemId: (state, action: PayloadAction<number>) => {
            state.selectedJamMemId = action.payload;
        },
    },
});

export const { setSelectedJamMemId } = jamMemSlice.actions;

export default jamMemSlice.reducer;

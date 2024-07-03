import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const INVALID_JAM_MEM_ID = "";

export type JamMemState = {
    selectedJamMemId: string;
};

const initialState: JamMemState = {
    selectedJamMemId: INVALID_JAM_MEM_ID,
};

const jamMemSlice = createSlice({
    name: "jamMem",
    initialState,
    reducers: {
        setSelectedJamMemId: (state, action: PayloadAction<string>) => {
            state.selectedJamMemId = action.payload;
        },
    },
});

export const { setSelectedJamMemId } = jamMemSlice.actions;

export default jamMemSlice.reducer;

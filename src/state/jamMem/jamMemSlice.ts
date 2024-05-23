import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type JamMemState = {
    selectedJamMemId: number | null;
};

const initialState: JamMemState = {
    selectedJamMemId: null,
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

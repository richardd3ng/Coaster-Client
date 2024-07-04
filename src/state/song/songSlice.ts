import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const INVALID_SONG_ID = "";

export type SongState = {
    currentlyPlayingSongId: string;
};

const initialState: SongState = {
    currentlyPlayingSongId: INVALID_SONG_ID,
};

const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {
        setCurrentlyPlayingSongId: (state, action: PayloadAction<string>) => {
            state.currentlyPlayingSongId = action.payload;
        },
    },
});

export const { setCurrentlyPlayingSongId } = songSlice.actions;

export default songSlice.reducer;

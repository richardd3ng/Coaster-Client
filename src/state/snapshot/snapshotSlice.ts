import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SnapshotState = {
    lastSnapshotTimestamp: number | null;
};

const initialState: SnapshotState = {
    lastSnapshotTimestamp: null,
};

const snapshotSlice = createSlice({
    name: "snapshot",
    initialState,
    reducers: {
        setLastSnapshotTimestamp: (state, action: PayloadAction<number>) => {
            state.lastSnapshotTimestamp = action.payload;
        },
    },
});

export const { setLastSnapshotTimestamp } = snapshotSlice.actions;

export default snapshotSlice.reducer;

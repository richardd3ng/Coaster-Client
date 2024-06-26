import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SnapshotState = {
    lastSnapshotTimestamp: number;
};

const initialState: SnapshotState = {
    lastSnapshotTimestamp: Date.now(),
};

const snapshotSlice = createSlice({
    name: "snapshot",
    initialState,
    reducers: {
        takeSnapshot: (state, action: PayloadAction<number>) => {
            state.lastSnapshotTimestamp = action.payload;
        },
    },
});

export const { takeSnapshot } = snapshotSlice.actions;

export default snapshotSlice.reducer;

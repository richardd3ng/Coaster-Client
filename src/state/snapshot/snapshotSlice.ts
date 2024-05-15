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
            console.log(
                `prev snapshot: ${state.lastSnapshotTimestamp}, curr snapshot: ${action.payload}`
            );
            state.lastSnapshotTimestamp = action.payload;
        },
    },
});

export const { takeSnapshot } = snapshotSlice.actions;

export default snapshotSlice.reducer;

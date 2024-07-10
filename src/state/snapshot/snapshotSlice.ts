import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SnapshotState = {
    lastAttemptedSnapshotTimestamp: number | null;
    lastSuccessfulSnapshotTimestamp: number | null;
};

const initialState: SnapshotState = {
    lastAttemptedSnapshotTimestamp: null,
    lastSuccessfulSnapshotTimestamp: null,
};

const snapshotSlice = createSlice({
    name: "snapshot",
    initialState,
    reducers: {
        setLastAttemptedSnapshotTimestamp: (
            state,
            action: PayloadAction<number>
        ) => {
            state.lastAttemptedSnapshotTimestamp = action.payload;
        },
        setLastSuccessfulSnapshotTimestamp: (
            state,
            action: PayloadAction<number>
        ) => {
            state.lastSuccessfulSnapshotTimestamp = action.payload;
        },
    },
});

export const {
    setLastAttemptedSnapshotTimestamp,
    setLastSuccessfulSnapshotTimestamp,
} = snapshotSlice.actions;

export default snapshotSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SongCluster } from "../../utils/superclusterManager";

export type ClusterState = {
    selectedCluster: SongCluster | null;
};

const initialState: ClusterState = {
    selectedCluster: null,
};

const clusterSlice = createSlice({
    name: "cluster",
    initialState,
    reducers: {
        setSelectedCluster: (state, action: PayloadAction<SongCluster>) => {
            state.selectedCluster = action.payload;
        },
    },
});

export const { setSelectedCluster } = clusterSlice.actions;

export default clusterSlice.reducer;

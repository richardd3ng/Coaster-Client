import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./location/locationSlice";
import snapshotReducer from "./snapshot/snapshotSlice";

const store = configureStore({
    reducer: {
        location: locationReducer,
        snapshot: snapshotReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

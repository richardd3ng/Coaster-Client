import { configureStore } from "@reduxjs/toolkit";

import jamMemReducer from "./jamMem/jamMemSlice";
import locationReducer from "./location/locationSlice";
import snapshotReducer from "./snapshot/snapshotSlice";

const store = configureStore({
    reducer: {
        jamMem: jamMemReducer,
        location: locationReducer,
        snapshot: snapshotReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

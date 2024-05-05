import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./location/locationSlice";

const store = configureStore({
    reducer: {
        location: locationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

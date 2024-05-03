import { configureStore } from "@reduxjs/toolkit";
import currentLocationReducer from "./location/currentLocationSlice";

const store = configureStore({
    reducer: {
        currentLocation: currentLocationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

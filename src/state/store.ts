import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import clusterReducer from "./cluster/clusterSlice";
import jamMemReducer from "./jamMem/jamMemSlice";
import locationReducer from "./location/locationSlice";
import snapshotReducer from "./snapshot/snapshotSlice";
import userReducer from "./user/userSlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedLocationReducer = persistReducer(persistConfig, locationReducer);

const store = configureStore({
    reducer: {
        cluster: clusterReducer,
        jamMem: jamMemReducer,
        location: persistedLocationReducer,
        snapshot: snapshotReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

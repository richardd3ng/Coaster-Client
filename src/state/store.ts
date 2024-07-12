import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import searchResultReducer from "./searchResult/searchResultSlice";
import snapshotReducer from "./snapshot/snapshotSlice";
import songReducer from "./song/songSlice";
import userReducer from "./user/userSlice";

const userPersistConfig = {
    key: "user",
    storage: AsyncStorage,
};

const locationPersistConfig = {
    key: "location",
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    cluster: clusterReducer,
    jamMem: jamMemReducer,
    location: persistReducer(locationPersistConfig, locationReducer),
    snapshot: snapshotReducer,
    searchResult: searchResultReducer,
    song: songReducer,
    user: persistReducer(userPersistConfig, userReducer),
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["location", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
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

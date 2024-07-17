import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReduxStateFragment } from "../../gql/graphql";

export interface LocalUserState {
    trackSnapshots: boolean;
}

const defaultLocalUserState: LocalUserState = {
    trackSnapshots: true,
};

interface UserState {
    userServerData: UserReduxStateFragment | null;
    userLocalData: LocalUserState | null;
}

const initialState: UserState = {
    userServerData: null,
    userLocalData: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserServerData: (
            state,
            action: PayloadAction<UserReduxStateFragment>
        ) => {
            state.userServerData = action.payload;
            state.userLocalData = state.userLocalData ?? defaultLocalUserState;
        },
        setUserLocalData: (
            state,
            action: PayloadAction<Partial<LocalUserState>>
        ) => {
            state.userLocalData = {
                ...defaultLocalUserState,
                ...(state.userLocalData ?? {}),
                ...action.payload,
            };
        },
        logOutUser: () => initialState,
    },
});

export const { setUserServerData, setUserLocalData, logOutUser } =
    userSlice.actions;

export default userSlice.reducer;

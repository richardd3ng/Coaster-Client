import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReduxState } from "../../types/entities";

export type UserState = {
    currentUser: UserReduxState | null;
};

const initialState: UserState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (
            state,
            action: PayloadAction<UserReduxState | null>
        ) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;

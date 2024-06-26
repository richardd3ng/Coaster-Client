import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "../../types/entities";

export type UserState = {
    currentUser: UserInfo | null;
};

const initialState: UserState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserInfo | null>) => {
            console.log("setting current user to:", action.payload);
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;

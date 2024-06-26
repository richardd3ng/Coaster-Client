import { useEffect } from "react";

import { useSelector } from "react-redux";

import { RootState } from "../state/store";
import useLogout from "./useLogout";
import { UserInfo } from "../types/entities";
import { Alert } from "react-native";

const useCurrentUser = (): UserInfo => {
    const { handleLogout } = useLogout();
    const currentUser: UserInfo | null = useSelector(
        (state: RootState) => state.user.currentUser
    );

    useEffect(() => {
        if (!currentUser) {
            handleLogout();
        }
    }, [currentUser]);

    if (!currentUser) {
        const error = "No current user found. Redirecting to login page.";
        Alert.alert(error);
        throw new Error(error);
    }

    return currentUser;
};

export default useCurrentUser;

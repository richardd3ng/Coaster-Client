import { useEffect } from "react";

import { Alert } from "react-native";

import useLogout from "./useLogout";

const useAutoLogout = <T>(field: T | null) => {
    const { handleLogout } = useLogout();

    useEffect(() => {
        if (field === null) {
            // const error = "Required field is null. Redirecting to login page.";
            // Alert.alert(error);
            // handleLogout();
            // throw new Error(error);
            console.log(
                "Required field is null. Redirecting to login page:",
                field
            );
        }
    }, [field, handleLogout]);
};

export default useAutoLogout;

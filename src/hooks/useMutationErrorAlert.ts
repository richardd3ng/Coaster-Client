import { useEffect } from "react";

import { Alert } from "react-native";

interface UseMutationErrorAlertProps {
    isError: boolean;
    error: Error | null;
    reset: () => void;
}

const useMutationErrorAlert = ({
    isError,
    error,
    reset,
}: UseMutationErrorAlertProps) => {
    useEffect(() => {
        if (isError && error) {
            Alert.alert("Error", error.message);
            reset();
        }
    }, [isError, error, reset]);
};

export default useMutationErrorAlert;

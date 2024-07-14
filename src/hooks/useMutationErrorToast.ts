import { useEffect } from "react";

import { showErrorToast } from "../utils/toastUtils";

interface UseMutationErrorToastProps {
    isError: boolean;
    error: Error | null;
    reset: () => void;
}

const useMutationErrorToast = ({
    isError,
    error,
    reset,
}: UseMutationErrorToastProps) => {
    useEffect(() => {
        if (isError && error) {
            showErrorToast(error);
            reset();
        }
    }, [isError, error, reset]);
};

export default useMutationErrorToast;

import { useEffect } from "react";

import { showErrorToast } from "../utils/toastUtils";

interface UseQueryErrorToastProps {
    isError: boolean;
    error: Error | null;
}

const useQueryErrorToast = ({ isError, error }: UseQueryErrorToastProps) => {
    useEffect(() => {
        if (isError && error) {
           showErrorToast(error);
        }
    }, [isError, error]);
};

export default useQueryErrorToast;

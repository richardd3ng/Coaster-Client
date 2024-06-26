import { useNavigation } from "@react-navigation/native";

import { dispatchSetCurrentUser } from "../state/storeUtils";
import { ScreenName, StackNavigation } from "../types/navigation";
import useLocationPostingForeground from "./useLocationPostingForeground";
import { useTrackingContext } from "./context/TrackingContext";

const useLogout = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const { setTracking } = useTrackingContext();
    const { stopInterval } = useLocationPostingForeground();

    const handleLogout = () => {
        // todo: invalidate queries but don't refetch
        setTracking(false);
        stopInterval();
        dispatchSetCurrentUser(null);
        navigate(ScreenName.Login);
    };

    return { handleLogout };
};

export default useLogout;

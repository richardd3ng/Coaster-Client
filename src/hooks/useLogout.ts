import { useNavigation } from "@react-navigation/native";

import { dispatchSetCurrentUser } from "../state/storeUtils";
import { ScreenName, StackNavigation } from "../types/navigation";
import { useTrackingContext } from "./context/TrackingContext";

const useLogout = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const { setTracking } = useTrackingContext();

    const handleLogout = () => {
        setTracking(false);
        dispatchSetCurrentUser(null);
        navigate(ScreenName.Login);
    };

    return { handleLogout };
};

export default useLogout;

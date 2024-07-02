import { useNavigation } from "@react-navigation/native";

import { dispatchSetCurrentUser } from "../state/storeUtils";
import { ScreenName, StackNavigation } from "../types/navigation";

const useLogout = () => {
    const { navigate } = useNavigation<StackNavigation>();

    const handleLogout = () => {
        dispatchSetCurrentUser(null);
        navigate(ScreenName.Login);
    };

    return { handleLogout };
};

export default useLogout;

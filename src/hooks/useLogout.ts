import { useNavigation } from "@react-navigation/native";

import { dispatchLogOutUser } from "../state/storeUtils";
import { ScreenName, StackNavigation } from "../types/navigation";

const useLogout = () => {
    const { navigate } = useNavigation<StackNavigation>();

    const handleLogout = () => {
        dispatchLogOutUser();
        navigate(ScreenName.Login);
    };

    return { handleLogout };
};

export default useLogout;

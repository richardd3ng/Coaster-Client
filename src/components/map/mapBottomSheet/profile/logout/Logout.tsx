import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/custom";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScreenName, StackNavigation } from "../../../../../types/navigation";
import { useMapContext } from "../../../../../hooks/context/MapContext";
import useTracking from "../../../../../hooks/useTracking";

const LogoutIcon = (
    <IconButton iconName="log-out" iconColor="black" style={styles.icon} />
);

const Logout: React.FC = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const [_tracking, setTracking] = useTracking();

    const handleLogout = () => {
        setTracking(false);
        navigate(ScreenName.Login);
    };

    return (
        <ProfileListItem
            text={ProfileOption.Logout}
            onPress={handleLogout}
            icon={LogoutIcon}
            hideArrow
            hideDivider
            textColor="red"
            style={styles.profileListItem}
        />
    );
};

export default Logout;

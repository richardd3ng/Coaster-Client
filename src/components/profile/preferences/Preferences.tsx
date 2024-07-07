import IconButton from "../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import styles from "./styles";
import { usePreferencesModal } from "../../../hooks/context/ModalContext";

const PreferencesIcon = (
    <IconButton iconName="settings-2" iconColor="black" style={styles.icon} />
);

const Preferences: React.FC = () => {
    const { present } = usePreferencesModal();

    return (
        <ProfileListItem
            text={ProfileOption.Preferences}
            onPress={present}
            icon={PreferencesIcon}
        />
    );
};

export default Preferences;

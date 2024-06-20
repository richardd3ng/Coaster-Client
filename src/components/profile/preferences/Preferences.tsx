import IconButton from "../../shared/iconButton/IconButton";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import styles from "./styles";

const PreferencesIcon = (
    <IconButton iconName="settings-2" iconColor="black" style={styles.icon} />
);

const Preferences: React.FC = () => {
    const { present } = useModal();
    return (
        <ProfileListItem
            text={ProfileOption.Preferences}
            onPress={() => present(ModalType.Preferences)}
            icon={PreferencesIcon}
        />
    );
};

export default Preferences;

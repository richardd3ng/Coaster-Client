import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import { usePreferencesModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const Preferences: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = usePreferencesModal();

    return (
        <ProfileListItem
            text={ProfileOption.Preferences}
            onPress={present}
            icon={
                <IconButton
                    iconName="settings-2"
                    iconColor={styles.icon.color}
                    style={styles.icon}
                />
            }
        />
    );
};

export default Preferences;

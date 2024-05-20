import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/custom";
import styles from "./styles";

const PreferencesIcon = (
    <IconButton iconName="settings-2" iconColor="black" style={styles.icon} />
);

const Preferences: React.FC = () => {
    return (
        <ProfileListItem
            text={ProfileOption.Preferences}
            onPress={() => console.log("pressed preferences")}
            icon={PreferencesIcon}
            style={styles.profileListItem}
        />
    );
};

export default Preferences;

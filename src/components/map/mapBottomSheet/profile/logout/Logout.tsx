import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/custom";
import styles from "./styles";

const LogoutIcon = (
    <IconButton iconName="log-out" iconColor="black" style={styles.icon} />
);

const Logout: React.FC = () => {
    return (
        <ProfileListItem
            text={ProfileOption.LOGOUT}
            onPress={() => console.log("pressed log out")}
            icon={LogoutIcon}
            hideArrow
            hideDivider
            textColor="red"
            style={styles.profileListItem}
        />
    );
};

export default Logout;

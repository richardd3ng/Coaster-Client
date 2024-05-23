import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/navigation";
import styles from "./styles";

const Account: React.FC = () => {
    const AccountIcon = (
        <IconButton iconName="person" iconColor="black" style={styles.icon} />
    );

    return (
        <ProfileListItem
            text={ProfileOption.Account}
            onPress={() => console.log("pressed account settings")}
            icon={AccountIcon}
            style={styles.profileListItem}
        />
    );
};

export default Account;

import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/custom";
import styles from "./styles";

const Account: React.FC = () => {
    const AccountIcon = (
        <IconButton iconName="person" iconColor="black" style={styles.icon} />
    );

    return (
        <ProfileListItem
            text={ProfileOption.ACCOUNT}
            onPress={() => console.log("pressed account settings")}
            icon={AccountIcon}
            style={styles.profileListItem}
        />
    );
};

export default Account;

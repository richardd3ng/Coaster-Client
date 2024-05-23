import createStyles from "./styles";
import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/navigation";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

const Account: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

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

import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import { useAccountModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const Account: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useAccountModal();

    const AccountIcon = (
        <IconButton iconName="person" iconColor="black" style={styles.icon} />
    );

    return (
        <ProfileListItem
            text={ProfileOption.Account}
            onPress={present}
            icon={AccountIcon}
            containerStyle={styles.profileListItem}
        />
    );
};

export default Account;

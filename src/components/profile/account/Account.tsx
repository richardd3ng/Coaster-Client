import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import { useAccountModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const Account: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useAccountModal();

    return (
        <ProfileListItem
            text={ProfileOption.Account}
            onPress={present}
            icon={
                <IconButton
                    iconName="person"
                    iconColor={styles.icon.color}
                    style={styles.icon}
                />
            }
            containerStyle={styles.profileListItem}
        />
    );
};

export default Account;

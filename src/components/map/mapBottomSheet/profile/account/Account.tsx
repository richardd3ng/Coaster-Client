import createStyles from "./styles";
import IconButton from "../../../../shared/iconButton/IconButton";
import { ModalType, useModal } from "../../../../../hooks/context/ModalContext";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/navigation";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

const Account: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useModal();

    const AccountIcon = (
        <IconButton iconName="person" iconColor="black" style={styles.icon} />
    );

    return (
        <ProfileListItem
            text={ProfileOption.Account}
            onPress={() => present(ModalType.Account)}
            icon={AccountIcon}
            containerStyle={styles.profileListItem}
        />
    );
};

export default Account;

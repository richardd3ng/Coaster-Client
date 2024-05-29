import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import IconButton from "../../shared/iconButton/IconButton";
import styles from "./styles";

const ProfileIconButton: React.FC = () => {
    const { present } = useModal();

    return (
        <IconButton
            onPress={() => present(ModalType.Profile)}
            style={styles.button}
            iconName="person"
            iconColor="royalblue"
        />
    );
};

export default ProfileIconButton;

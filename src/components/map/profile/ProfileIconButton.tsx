import { Button, Icon } from "@ui-kitten/components";

import styles from "./styles";
import { ModalType, useModal } from "../../../context/modalContext";

const ProfileIconButton = () => {
    const { presentModal } = useModal();

    return (
        <Button
            style={styles.profileIconButton}
            appearance="ghost"
            accessoryLeft={<Icon name={"person"} />}
            onPress={() => presentModal(ModalType.Profile)}
        />
    );
};

export default ProfileIconButton;

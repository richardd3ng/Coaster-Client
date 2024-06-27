import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import { useModal, ModalType } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const SentRequestsTextButton = () => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useModal();
    return (
        <TextButton
            text="Sent  〉"
            textStyle={styles.text}
            onPress={() => present(ModalType.SentRequests)}
        />
    );
};

export default SentRequestsTextButton;

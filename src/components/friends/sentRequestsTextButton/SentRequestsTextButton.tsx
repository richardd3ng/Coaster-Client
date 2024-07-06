import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import { useSentRequestsModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const SentRequestsTextButton = () => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useSentRequestsModal();
    return (
        <TextButton text="Sent  〉" textStyle={styles.text} onPress={present} />
    );
};

export default SentRequestsTextButton;

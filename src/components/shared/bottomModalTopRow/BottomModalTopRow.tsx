import { Text, View } from "react-native";

import createStyles from "./styles";
import CloseButton from "../closeButton/CloseButton";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface BottomModalTopRowProps {
    headerText: string;
    modalType: ModalType;
    onClose?: () => void;
}

const BottomModalTopRow: React.FC<BottomModalTopRowProps> = ({
    headerText,
    modalType,
    onClose,
}: BottomModalTopRowProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss } = useModal();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>{headerText}</Text>
            </View>
            <CloseButton onPress={onClose || (() => dismiss(modalType))} />
        </View>
    );
};

export default BottomModalTopRow;

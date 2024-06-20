import { Text, View } from "react-native";

import createStyles from "./styles";
import CloseButton from "../closeButton/CloseButton";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { ReactNode } from "react";

interface BottomModalTopRowProps {
    headerText: string;
    modalType: ModalType;
    onClose?: () => void;
    children?: ReactNode;
}

const BottomModalTopRow: React.FC<BottomModalTopRowProps> = ({
    headerText,
    modalType,
    onClose,
    children,
}: BottomModalTopRowProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss } = useModal();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>{headerText}</Text>
                {children}
            </View>
            <CloseButton onPress={onClose || (() => dismiss(modalType))} />
        </View>
    );
};

export default BottomModalTopRow;

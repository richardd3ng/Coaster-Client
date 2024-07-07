import { memo, ReactNode } from "react";
import { Text, View } from "react-native";
import createStyles from "./styles";
import CloseButton from "../closeButton/CloseButton";
import { ModalType, useModalHook } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

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
    const { dismiss } = useModalHook(modalType);
    
    return (
        <>
            <View
                style={{
                    ...styles.topContainer,
                    paddingBottom: children ? 6 : styles.topContainer.padding,
                }}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>{headerText}</Text>
                </View>
                <CloseButton onPress={onClose || dismiss} />
            </View>
            {children}
        </>
    );
};

export default memo(BottomModalTopRow);

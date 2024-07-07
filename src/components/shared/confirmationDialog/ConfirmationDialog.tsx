import React, { ReactNode } from "react";

import { Modal, View, Text } from "react-native";
import { Divider } from "@ui-kitten/components";

import createStyles from "./styles";
import TextButton from "../textButton/TextButton";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ConfirmationDialogProps {
    open: boolean;
    title: string;
    description?: string;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
    preventDefaultConfirm?: boolean;
    disableConfirm?: boolean;
    sameButtonTextStyle?: boolean;
    children?: ReactNode;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    open,
    title,
    description,
    onClose,
    onConfirm,
    confirmText = "Confirm",
    preventDefaultConfirm = false,
    disableConfirm = false,
    sameButtonTextStyle = false,
    children,
}: ConfirmationDialogProps) => {
    const styles = useThemeAwareObject(createStyles);

    const handleConfirm = () => {
        if (!preventDefaultConfirm) {
            onClose();
        }
        onConfirm();
    };

    return (
        <Modal transparent={true} visible={open} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.dialog}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        {description && (
                            <Text style={styles.descriptionText}>
                                {description}
                            </Text>
                        )}
                        {children}
                    </View>
                    <Divider style={styles.horizontalDivider} />
                    <View style={styles.buttonContainer}>
                        <TextButton
                            onPress={onClose}
                            style={styles.cancelButton}
                            text="Cancel"
                            textStyle={styles.cancelText}
                        />
                        <Divider style={styles.verticalDivider} />
                        <TextButton
                            onPress={handleConfirm}
                            style={styles.confirmButton}
                            text={confirmText}
                            textStyle={
                                sameButtonTextStyle
                                    ? styles.cancelText
                                    : styles.confirmText
                            }
                            disabled={disableConfirm}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationDialog;

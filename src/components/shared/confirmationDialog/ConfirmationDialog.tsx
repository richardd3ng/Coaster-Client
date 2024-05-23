import React from "react";

import { Modal, View, Text } from "react-native";
import { Divider } from "@ui-kitten/components";

import styles from "./styles";
import TextButton from "../textButton/TextButton";

interface ConfirmationDialogProps {
    open: boolean;
    title: string;
    description?: string;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    open,
    title,
    description,
    onClose,
    onConfirm,
    confirmText = "Confirm",
}: ConfirmationDialogProps) => {
    const handleConfirm = () => {
        onClose();
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
                    </View>
                    <Divider style={styles.horizontalDivider} />
                    <View style={styles.buttonContainer}>
                        <TextButton
                            onPress={onClose}
                            activeOpacity={0.5}
                            style={styles.cancelButton}
                            text="Cancel"
                            textStyle={styles.cancelText}
                        />
                        <Divider style={styles.verticalDivider} />
                        <TextButton
                            onPress={handleConfirm}
                            activeOpacity={0.5}
                            style={styles.confirmButton}
                            text={confirmText}
                            textStyle={styles.confirmText}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationDialog;

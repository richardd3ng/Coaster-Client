import React from "react";
import { Modal, View, Text } from "react-native";
import { Button, Divider } from "@ui-kitten/components";

import styles from "./styles";
import TextButton from "../textButton/TextButton";

interface ConfirmationDialogProps {
    open: boolean;
    text: string;
    onClose: () => void;
    onConfirm: () => void;
    confirmText?: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (
    props: ConfirmationDialogProps
) => {
    const handleConfirm = () => {
        props.onClose();
        props.onConfirm();
    };

    return (
        <Modal
            transparent={true}
            visible={props.open}
            onRequestClose={props.onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.dialog}>
                    <Text style={styles.dialogText}>{props.text}</Text>
                    <Divider style={styles.horizontalDivider} />
                    <View style={styles.buttonContainer}>
                        <TextButton
                            onPress={props.onClose}
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
                            text={props.confirmText || "Confirm"}
                            textStyle={styles.confirmText}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationDialog;

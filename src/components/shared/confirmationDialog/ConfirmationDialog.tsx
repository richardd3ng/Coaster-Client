import React from "react";
import { Modal, View, Text, Button, Pressable } from "react-native";
import { Divider } from "@ui-kitten/components";

import styles from "./styles";

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
                    <Text>{props.text}</Text>
                    <Divider style={styles.horizontalDivider} />
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={props.onClose}
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.5 : 1.0 },
                            ]}
                        />
                        <Divider style={styles.verticalDivider} />
                        <Button
                            title={props.confirmText || "Confirm"}
                            onPress={handleConfirm}
                            color={"red"}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationDialog;

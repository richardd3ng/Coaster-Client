import React from "react";

import LottieView from "lottie-react-native";
import { Modal, Text, View } from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface LoadingModalProps {
    visible: boolean;
    text: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({
    visible,
    text,
}: LoadingModalProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <Modal transparent={true} animationType="fade" visible={visible}>
            <View style={styles.modalBackground}>
                <View style={styles.loadingContainer}>
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={require("../../../../assets/animations/loading.json")}
                            style={styles.animation}
                            autoPlay
                            loop
                        />
                    </View>

                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </Modal>
    );
};

export default LoadingModal;

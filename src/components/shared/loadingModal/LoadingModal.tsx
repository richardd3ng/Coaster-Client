import { ActivityIndicator, Text, View } from "react-native";

import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import createStyles from "./styles";

interface LoadingModalProps {
    text: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({
    text,
}: LoadingModalProps) => {
    const styles = useThemeAwareObject(createStyles);
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default LoadingModal;

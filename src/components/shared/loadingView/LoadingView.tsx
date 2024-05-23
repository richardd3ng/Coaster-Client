import {
    ActivityIndicator,
    StyleProp,
    Text,
    View,
    ViewStyle,
} from "react-native";

import styles from "./styles";

interface LoadingViewProps {
    containerStyle?: StyleProp<ViewStyle>;
}

const LoadingView: React.FC<LoadingViewProps> = ({
    containerStyle,
}: LoadingViewProps) => {
    return (
        <View style={[styles.loadingContainer, containerStyle]}>
            <ActivityIndicator style={styles.spinner} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

export default LoadingView;

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
    hideText?: boolean;
}

const LoadingView: React.FC<LoadingViewProps> = ({
    containerStyle = styles.loadingContainer,
    hideText = false,
}: LoadingViewProps) => {
    return (
        <View style={containerStyle}>
            <ActivityIndicator style={styles.spinner} />
            {!hideText && <Text style={styles.text}>Loading...</Text>}
        </View>
    );
};

export default LoadingView;

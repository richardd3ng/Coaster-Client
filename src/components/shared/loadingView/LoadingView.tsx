import {
    ActivityIndicator,
    StyleProp,
    Text,
    View,
    ViewStyle,
} from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface LoadingViewProps {
    containerStyle?: StyleProp<ViewStyle>;
    hideText?: boolean;
}

const LoadingView: React.FC<LoadingViewProps> = ({
    containerStyle,
    hideText = false,
}: LoadingViewProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={containerStyle || styles.loadingContainer}>
            <ActivityIndicator style={styles.spinner} />
            {!hideText && <Text style={styles.text}>Loading...</Text>}
        </View>
    );
};

export default LoadingView;

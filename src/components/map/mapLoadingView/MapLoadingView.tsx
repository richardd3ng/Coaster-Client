import { ActivityIndicator, Text, View } from "react-native";

import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import createStyles from "./styles";

interface MapLoadingViewProps {
    text: string;
}

const MapLoadingView: React.FC<MapLoadingViewProps> = ({
    text,
}: MapLoadingViewProps) => {
    const styles = useThemeAwareObject(createStyles);
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default MapLoadingView;

import { ActivityIndicator, Text, View } from "react-native";

import styles from "./styles";

const BottomModalLoading: React.FC = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator style={styles.spinner} />
            <Text style={{ color: "gray" }}>Loading...</Text>
        </View>
    );
};

export default BottomModalLoading;

import { useEffect, useState } from "react";

import { ActivityIndicator, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenName, StackNavigation } from "../../types/navigation";
import superclusterManager from "../../utils/superclusterManager";

import styles from "./styles";

const LoadingScreen: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { navigate } = useNavigation<StackNavigation>();
    console.log("rendered loading screen");

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1)); // Add delay to make loading UI show up
            await superclusterManager.loadData();
            setLoading(false);
        };

        loadData();
    }, []);

    useEffect(() => {
        if (!loading) {
            navigate(ScreenName.Map);
        }
    }, [loading]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

export default LoadingScreen;

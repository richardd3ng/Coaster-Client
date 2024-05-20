import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles";
import useSplashScreen from "../../hooks/useSplashScreen";
import Map from "../map/Map";
import Login from "../login/Login";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

const AppRoot = () => {
    const { loading, onLayoutRootView } = useSplashScreen();

    if (loading) {
        return null;
    }
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Map" component={Map} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default AppRoot;

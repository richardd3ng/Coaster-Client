import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles";
import MapScreen from "../map/MapScreen";
import LoginScreen from "../login/LoginScreen";
import { RootStackParamList, ScreenName } from "../../types/navigation";
import LoadingScreen from "../loading/LoadingScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoot: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name={ScreenName.Login}
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name={ScreenName.Loading}
                        component={LoadingScreen}
                    />
                    <Stack.Screen name={ScreenName.Map} component={MapScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default AppRoot;

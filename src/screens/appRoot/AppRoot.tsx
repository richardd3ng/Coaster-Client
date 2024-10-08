import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import LoginScreen from "../login/LoginScreen";
import MapScreen from "../map/MapScreen";
import { RootStackParamList, ScreenName } from "../../types/navigation";
import styles from "./styles";

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
                    <Stack.Screen name={ScreenName.Map} component={MapScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default AppRoot;

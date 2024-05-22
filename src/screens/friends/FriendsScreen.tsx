import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FriendsTabName } from "../../types/navigation";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Hi</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings</Text>
        </View>
    );
}

const FriendsScreen: React.FC = () => {
    return (
        <NavigationContainer independent>
            <Tab.Navigator>
                <Tab.Screen
                    name={FriendsTabName.Connections}
                    component={HomeScreen}
                />
                <Tab.Screen
                    name={FriendsTabName.Requests}
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default FriendsScreen;

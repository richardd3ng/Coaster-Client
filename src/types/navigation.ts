import { NavigationProp } from "@react-navigation/native";

export enum ScreenName {
    Login = "Login",
    Loading = "Loading",
    Map = "Map",
    Friends = "Friends",
}

export type RootStackParamList = {
    [ScreenName.Login]: undefined;
    [ScreenName.Loading]: undefined;
    [ScreenName.Map]: undefined;
    [ScreenName.Friends]: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

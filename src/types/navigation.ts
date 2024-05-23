import { NavigationProp } from "@react-navigation/native";

export enum FriendsTabName {
    Connections = "Connections",
    Requests = "Requests",
}

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

export enum ProfileOption {
    Account = "Account Settings",
    Preferences = "Preferences",
    Logout = "Log Out",
}

export enum PreferencesOption {
    TrackSnapshots = "Track Snapshots",
    ShareSnapshots = "Share Snapshots",
}

import { NavigationProp } from "@react-navigation/native";

export enum FriendsTabName {
    Connections = "Connections",
    Requests = "Requests",
}

export enum JamMemTabName {
    Clusters = "Clusters",
    JamFriends = "Jam Friends",
}

export enum ScreenName {
    Login = "Login",
    Map = "Map",
}

export type RootStackParamList = {
    [ScreenName.Login]: undefined;
    [ScreenName.Map]: undefined;
};

export type FriendsTabParamList = {
    [FriendsTabName.Connections]: undefined;
    [FriendsTabName.Requests]: undefined;
};

export type JamMemTabParamList = {
    [JamMemTabName.Clusters]: undefined;
    [JamMemTabName.JamFriends]: undefined;
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

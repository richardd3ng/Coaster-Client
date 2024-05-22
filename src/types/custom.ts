import { LatLng } from "react-native-maps";

export interface LocationTimestamp {
    coords: LatLng;
    timestamp: number;
}

export interface Snapshot {
    locationTimestamp: LocationTimestamp;
    songId: number;
}

export interface JamMem {
    id: number;
    place: string;
    title: string;
    startTimestamp: number;
    endTimestamp: number;
}

export interface Song {
    id: number;
    uri: string;
    title: string;
    artist: string;
    albumURI: string;
}

export enum DateFilter {
    None,
    Week,
    Month,
    Year,
}

export enum SocialFilter {
    Me,
    Friends,
    Global,
}

export enum ProfileOption {
    Account = "Account Settings",
    Preferences = "Preferences",
    Logout = "Log Out",
}

export enum PreferencesOption {
    TrackSnapshots = "Track Snapshots",
    ShareSnapshots = "Share Snapshots",
}
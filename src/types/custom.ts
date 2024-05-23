import { LatLng } from "react-native-maps";

/* Users */
export interface User {
    id: number;
    username: string;
    displayName: string;
}

/* Snapshots */
export interface LocationTimestamp {
    coords: LatLng;
    timestamp: number;
}

export interface Snapshot {
    locationTimestamp: LocationTimestamp;
    songId: number;
}

/* Jam Mems */
export interface JamMem {
    id: number;
    ownerId: number;
    place: string;
    title: string;
    start: Date;
    end: Date;
    snapshots: Snapshot[];
    friends: User[];
}

export interface JamMemMetadata extends Omit<JamMem, "snapshots" | "friends"> {}

/* Songs */
export interface Song {
    id: number;
    uri: string;
    title: string;
    artist: string;
    albumURI: string;
}

/* Misc. */
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

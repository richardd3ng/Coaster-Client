import { LatLng, Region } from "react-native-maps";

export interface LocationTimestamp {
    coords: LatLng;
    timestamp: number;
}

export interface SnapShot {
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

export enum DateFilter {
    NONE,
    WEEK,
    MONTH,
    YEAR,
}

export enum SocialFilter {
    ME,
    FRIENDS,
    GLOBAL,
}

export enum ProfileOption {
    ACCOUNT = "Account Settings",
    PREFERENCES = "Preferences",
    LOGOUT = "Log Out",
}

export type MapRegion = Region | null;

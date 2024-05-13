import { Region } from "react-native-maps";
import { LatLng } from "react-native-maps";

export interface LocationTimestamp {
    coords: LatLng;
    timestamp: number;
}

export interface SnapShot {
    locationTimestamp: LocationTimestamp;
    songId: number;
}

export interface JamMem {
    place: string;
    title: string;
    start: Date;
    end: Date;
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

export type MapRegion = Region | null;

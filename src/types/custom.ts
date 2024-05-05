import { Region } from "react-native-maps";
import { LatLng } from "react-native-maps";

export type LocationTimestamp = {
    coords: LatLng;
    timestamp: number;
};

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

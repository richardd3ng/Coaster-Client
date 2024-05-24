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
    title: string;
    location: string;
    start: Date;
    end: Date;
    coverImage: string;
    snapshots: Snapshot[];
    friends: User[];
}

export interface JamMemMetadata extends Omit<JamMem, "snapshots" | "friends"> {}

export interface JamMemCreationArgs
    extends Omit<JamMem, "id" | "ownerId" | "snapshots" | "friends"> {}

/* Songs */
export interface Song {
    id: number;
    uri: string;
    title: string;
    artist: string;
    albumURI: string;
}

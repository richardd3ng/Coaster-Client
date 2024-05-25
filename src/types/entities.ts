import { LatLng } from "react-native-maps";

/* Users */
export interface User {
    id: number;
    username: string;
    displayName: string;
    trackSnapshots: boolean;
    shareSnapshots: boolean;
}

export interface UserUpdateArgs {
    username?: string;
    displayName?: string;
    trackSnapshots?: boolean;
    shareShapshots?: boolean;
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
    coverUri: string;
    snapshots: Snapshot[];
    friends: User[];
}

export interface JamMemMetadata
    extends Omit<JamMem, "ownerId" | "snapshots" | "friends"> {}

export interface JamMemCreationArgs
    extends Omit<JamMem, "id" | "ownerId" | "snapshots" | "friends"> {}

/* Songs */
export interface Song {
    id: number;
    uri: string;
    title: string;
    artist: string;
    albumUri: string;
}

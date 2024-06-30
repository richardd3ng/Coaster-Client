import { LatLng } from "react-native-maps";
import { PointFeature } from "supercluster";
import { SongPointProps } from "../utils/superclusterManager";
import { UserInfoFragment } from "../gql/graphql";

/* Users */
export interface UserInfo {
    id: string;
    spotifyId: string;
    username: string;
    displayName: string;
    profileUrl: string;
}

export interface FriendArgs {
    id: string;
    friendId: string;
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
    snapshots: PointFeature<SongPointProps>[];
    friends: UserInfoFragment[];
}

export interface JamMemMetadata
    extends Omit<JamMem, "ownerId" | "snapshots" | "friends"> {}

export interface JamMemCreationArgs
    extends Omit<JamMem, "id" | "ownerId" | "snapshots" | "friends"> {}

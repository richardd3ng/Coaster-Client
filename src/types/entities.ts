import { LatLng } from "react-native-maps";
import { UserInfoFragment } from "../gql/graphql";

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
    id: string;
    ownerId: string;
    name: string;
    location: string;
    start: Date;
    end: Date;
    coverUrl?: string;
    friends?: UserInfoFragment[];
}
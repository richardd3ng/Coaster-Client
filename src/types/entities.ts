import { LatLng } from "react-native-maps";
import { UserInfoFragment } from "../gql/graphql";

/* Users */
export interface UserReduxState {
    id: string;
    spotifyId: string;
    username: string;
    displayName: string;
    profileUrl: string;
    preferences: {
        trackSnapshots: boolean;
    };
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
    id: string;
    name: string;
    location: string;
    start: Date;
    end: Date;
    coverUrl?: string;
    friends?: UserInfoFragment[];
}

export interface JamMemCreationArgs
    extends Omit<JamMem, "id" | "ownerId" | "snapshots" | "friends"> {}

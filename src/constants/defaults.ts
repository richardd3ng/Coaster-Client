import { LatLng } from "react-native-maps";

import { ClusterFilter, DateFilter } from "../types/filters";
import { SnapshotPrivacy } from "../gql/graphql";

export const DEFAULT_SOCIAL_FILTER: SnapshotPrivacy = SnapshotPrivacy.Everyone;

export const DEFAULT_CLUSTER_FILTER: ClusterFilter = {
    type: "social",
    value: DEFAULT_SOCIAL_FILTER,
};

export const DEFAULT_DATE_FILTER: DateFilter = DateFilter.Week;

export const DEFAULT_LOCATION: LatLng = {
    latitude: 37.78825,
    longitude: -122.4324,
};

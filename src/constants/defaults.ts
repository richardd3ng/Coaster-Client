import { LatLng } from "react-native-maps";

import { ClusterFilter, DateFilter, SocialFilter } from "../types/filters";

export const DEFAULT_SOCIAL_FILTER: SocialFilter = SocialFilter.Global;

export const DEFAULT_CLUSTER_FILTER: ClusterFilter = {
    type: "social",
    value: DEFAULT_SOCIAL_FILTER,
};

export const DEFAULT_DATE_FILTER: DateFilter = DateFilter.Week;

export const DEFAULT_LOCATION: LatLng = {
    latitude: 37.78825,
    longitude: -122.4324,
};

export const DEFAULT_JAM_MEM_COVER_URI = "https://source.unsplash.com/random/200x200";




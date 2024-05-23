import { LatLng } from "react-native-maps";
import { DateFilter, SocialFilter } from "../types/filters";

export const DEFAULT_LOCATION: LatLng = {
    latitude: 37.78825,
    longitude: -122.4324,
};

export const DEFAULT_DATE_FILTER = DateFilter.Week;

export const DEFAULT_SOCIAL_FILTER = SocialFilter.Global;

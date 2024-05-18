import { LatLng } from "react-native-maps";
import { DateFilter, SocialFilter } from "../types/custom";

export const DEFAULT_LOCATION: LatLng = {
    latitude: 37.78825,
    longitude: -122.4324,
};
export const DEFAULT_DATE_FILTER = DateFilter.WEEK;
export const DEFAULT_SOCIAL_FILTER = SocialFilter.GLOBAL;

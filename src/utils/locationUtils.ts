import Geocoder from "react-native-geocoding";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { LatLng } from "react-native-maps";

Geocoder.init(GOOGLE_MAPS_API_KEY);

export interface GeocoderResponse {
    placeId: string;
    address: string;
    coords: LatLng;
    latitudeDelta: number;
    longitudeDelta: number;
}

export const getDescription = async (coords: LatLng): Promise<string> => {
    return "";
};

export const getGeoData = async (
    description: string
): Promise<GeocoderResponse | null> => {
    try {
        const result = (await Geocoder.from(description)).results[0];
        return {
            placeId: result.place_id,
            address: result.formatted_address,
            coords: {
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng,
            },
            latitudeDelta:
                result.geometry.bounds.northeast.lat -
                result.geometry.bounds.southwest.lat,
            longitudeDelta:
                result.geometry.bounds.northeast.lng -
                result.geometry.bounds.southwest.lng,
        };
    } catch (error) {
        // server error or no results
        return null;
    }
};

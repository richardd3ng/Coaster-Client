import axios from "axios";
import { LatLng } from "react-native-maps";

import { GOOGLE_MAPS_API_KEY } from "@env";

export interface Place {
    placeId: string;
    name: string;
    address: string;
    coords: LatLng;
    latitudeDelta: number;
    longitudeDelta: number;
}

export const getDescription = async (coords: LatLng): Promise<string> => {
    return "";
};

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";

/**
 * Fetches places from the Google Places API
 * @param query The query to search for
 * @returns The places found
 * @throws An error if the request fails
 */
export const fetchPlaces = async (query: string): Promise<Place[]> => {
    if (query.trim() === "") {
        return [];
    }
    const url = `${BASE_URL}?query=${query}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await axios.get(url);
    console.log(`found ${response.data.results.length} results:`);
    console.log(response.data.results);
    const places: Place[] = [];
    for (const result of response.data.results) {
        const latitudeDelta =
            result.geometry.viewport.northeast.lat -
            result.geometry.viewport.southwest.lat;
        const longitudeDelta =
            result.geometry.viewport.northeast.lng -
            result.geometry.viewport.southwest.lng;
        places.push({
            placeId: result.place_id,
            name: result.name,
            address: result.formatted_address,
            coords: {
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng,
            },
            latitudeDelta:
                latitudeDelta < 0 ? latitudeDelta + 360 : latitudeDelta,
            longitudeDelta:
                longitudeDelta < 0 ? longitudeDelta + 360 : longitudeDelta,
        });
    }
    return places;
};

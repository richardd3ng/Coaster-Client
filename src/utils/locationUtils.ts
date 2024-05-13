import { GOOGLE_MAPS_API_KEY } from "@env";
import { LatLng } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

export interface PlaceData {
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

// export const getGeoData = async (
//     description: string
// ): Promise<GeocoderResponse | null> => {
//     try {
//         const result = (await Geocoder.from(description)).results[0];
//         const latitudeDelta =
//             result.geometry.bounds.northeast.lat -
//             result.geometry.bounds.southwest.lat;
//         const longitudeDelta =
//             result.geometry.bounds.northeast.lng -
//             result.geometry.bounds.southwest.lng;
//         return {
//             placeId: result.place_id,
//             address: result.formatted_address,
//             coords: {
//                 latitude: result.geometry.location.lat,
//                 longitude: result.geometry.location.lng,
//             },
//             latitudeDelta:
//                 latitudeDelta < 0 ? latitudeDelta + 360 : latitudeDelta,
//             longitudeDelta:
//                 longitudeDelta < 0 ? longitudeDelta + 360 : longitudeDelta,
//         };
//     } catch (error) {
//         // server error or no results
//         return null;
//     }
// };

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
export const getGeoData2 = async (
    query: string
): Promise<PlaceData[] | null> => {
    query = query.trim();
    if (query === "") {
        return null;
    }
    const url = `${BASE_URL}?query=${query}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
        const response = await axios.get(url);
        console.log(`found ${response.data.results.length} results`);
        console.log(response.data.results);
        const places: PlaceData[] = [];
        for (const result of response.data.results) {
            console.log("geometry:", result.geometry);
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
    } catch (error) {
        console.error(error);
        return null;
    }
};

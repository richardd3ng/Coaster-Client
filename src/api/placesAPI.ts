import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";

const PlacesQueryDocument = graphql(`
    query PlacesQuery($query: String!) {
        placesQuery(query: $query) {
            id
            name
            address
            latitude
            longitude
            latitudeDelta
            longitudeDelta
        }
    }
`);
export interface Place {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}
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
    const response = await graphqlRequest<{
        placesQuery: Place[];
    }>(PlacesQueryDocument, { query });
    return response.placesQuery;
};

import { graphql } from "../gql";
import { SearchResult } from "../gql/graphql";
import { graphqlRequest } from "./client.graphql";

const SearchByLocationSongOrArtistDocument = graphql(`
    query SearchByLocationSongOrArtist($query: String!) {
        searchByLocationSongOrArtist(query: $query) {
            id
            type
            name
            data
        }
    }
`);
/**
 * Fetches places from the Google Places API
 * @param query The query to search for
 * @returns The places found
 * @throws An error if the request fails
 */
export const searchByLocationSongOrArtist = async (
    query: string
): Promise<SearchResult[]> => {
    if (query.trim() === "") {
        return [];
    }
    const response = await graphqlRequest<{
        searchByLocationSongOrArtist: SearchResult[];
    }>(SearchByLocationSongOrArtistDocument, { query });
    return response.searchByLocationSongOrArtist;
};

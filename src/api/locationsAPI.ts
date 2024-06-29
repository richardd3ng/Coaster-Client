import {
    dispatchClearHistory,
    getCurrentUser,
    getHistoryState,
} from "../state/storeUtils";
import { graphql } from "../gql";
import { graphqlRequest } from "./client.graphql";

const locationCreateManyMutationDocument = graphql(`
    mutation LocationCreateMany($locations: [CreateManyLocationInput!]!) {
        locationCreateMany(records: $locations) {
            records {
                userId
                latitude
                longitude
                timestamp
            }
        }
    }
`);
// note: this function reads directly from the redux store
export const postLocations = async () => {
    const userId = getCurrentUser()?.id;
    if (!userId) {
        throw new Error("No user logged in");
    }
    const locations = getHistoryState();
    if (locations.length === 0) {
        return;
    }
    console.log("Posting", locations, "locations");
    const response = await graphqlRequest<{
        locationCreateMany: {
            records: {
                userId: string;
                latitude: number;
                longitude: number;
                timestamp: number;
            }[];
        };
    }>(locationCreateManyMutationDocument, {
        locations: locations.map((location) => ({
            userId,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp: location.timestamp,
        })),
    });
    dispatchClearHistory();
    return response.locationCreateMany.records;
};

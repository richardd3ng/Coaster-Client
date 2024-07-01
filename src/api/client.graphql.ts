import { GraphQLClient, RequestDocument } from "graphql-request";

import { BASE_URL } from "@env";
import { getValidAccessToken } from "./tokenUtils";
import { getCurrentUser } from "../state/storeUtils";

const createGraphQLClient = async (): Promise<GraphQLClient> => {
    const spotifyId = getCurrentUser()?.spotifyId;
    if (spotifyId === undefined) {
        throw new Error("No spotify user found");
    }
    const accessToken = await getValidAccessToken(spotifyId);
    return new GraphQLClient(`${BASE_URL}/graphql`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

/**
 * Makes a GraphQL request with the given query and variables
 * @param query The query to send
 * @param variables The variables to send with the query
 * @returns The response data
 */
export const graphqlRequest = async <T>(
    query: RequestDocument,
    variables?: Record<string, any>
): Promise<T> => {
    const client = await createGraphQLClient();
    return client.request<T>(query, variables);
};

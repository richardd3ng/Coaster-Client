import { graphql } from "../gql";
import { JamMemMetadataFragment, UserInfoFragment } from "../gql/graphql";
import { JamMem } from "../types/entities";
import { graphqlRequest } from "./client.graphql";
import { formatError } from "./errorUtils";

const JamMemByUserIdQueryDocument = graphql(`
    query JamMemByUserId($userId: MongoID!) {
        jamMemByUserId(userId: $userId) {
            ...JamMemMetadata
        }
    }
`);
/**
 * Fetches Jam Mem metadatas by a user's id (see JamMemMetadataFragment)
 * @param userId The id of the user
 * @returns The Jam Mem metadatas
 * @throws An error if the request fails
 */
export const fetchJamMemMetadatasByUser = async (
    userId: string
): Promise<JamMemMetadataFragment[]> => {
    try {
        const response = await graphqlRequest<{
            jamMemByUserId: JamMemMetadataFragment[];
        }>(JamMemByUserIdQueryDocument, { userId });
        return response.jamMemByUserId;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to load Jam Mems");
    }
};

const JamMemByUserIdSharedQueryDocument = graphql(`
    query JamMemByUserIdShared($userId: MongoID!) {
        jamMemByUserIdShared(userId: $userId) {
            ...JamMemMetadata
        }
    }
`);
/**
 * Fetches shared Jam Mem metadatas by a user's id (see JamMemMetadataFragment)
 * @param userId The id of the user
 * @returns The Jam Mem metadatas
 * @throws An error if the request fails
 */
export const fetchJamMemMetadatasByUserShared = async (
    userId: string
): Promise<JamMemMetadataFragment[]> => {
    try {
        const response = await graphqlRequest<{
            jamMemByUserIdShared: JamMemMetadataFragment[];
        }>(JamMemByUserIdSharedQueryDocument, { userId });
        return response.jamMemByUserIdShared;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to load shared Jam Mems");
    }
};

const JamMemByIdQueryDocument = graphql(`
    query JamMemById($id: MongoID!) {
        jamMemById(_id: $id) {
            _id
            ownerId
            name
            location
            start
            end
            coverUrl
            friends {
                ...UserInfo
            }
        }
    }
`);
interface JamMemByIdResponse {
    jamMemById: {
        _id: string;
        ownerId: string;
        name: string;
        location: string;
        start: Date;
        end: Date;
        coverUrl: string;
        friends: UserInfoFragment[];
    };
}
/**
 * Fetches a Jam Mem by its id
 * @param id The id of the Jam Mem
 * @returns The Jam Mem
 * @throws An error if the request fails
 */
export const fetchJamMem = async (id: string): Promise<JamMem | null> => {
    if (!id) {
        return null;
    }
    try {
        const response = await graphqlRequest<JamMemByIdResponse>(
            JamMemByIdQueryDocument,
            { id }
        );
        const { _id, ownerId, name, location, start, end, coverUrl, friends } =
            response.jamMemById;
        return {
            id: _id,
            ownerId,
            name,
            location,
            start: new Date(start),
            end: new Date(end),
            coverUrl,
            friends,
        };
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to fetch Jam Mem");
    }
};

const createJamMemMutationDocument = graphql(`
    mutation CreateJamMem(
        $ownerId: MongoID!
        $name: String!
        $location: String!
        $start: Date!
        $end: Date!
        $coverImage: String
        $friends: [MongoID!]
    ) {
        jamMemCreateOne(
            ownerId: $ownerId
            name: $name
            location: $location
            start: $start
            end: $end
            coverImage: $coverImage
            friends: $friends
        ) {
            _id
        }
    }
`);
interface JamMemCreationArgs {
    ownerId: string;
    name: string;
    location: string;
    start: Date;
    end: Date;
    coverImage?: string;
    friends?: string[];
}
/**
 * Creates a new Jam Mem
 * @param ownerId The id of the owner of the Jam Mem
 * @param name The name of the Jam Mem
 * @param location The location of the Jam Mem
 * @param start The start date of the Jam Mem (inclusive)
 * @param end The end date of the Jam Mem (exclusive)
 * @param coverImage The base64 encoded image for the cover
 * @param friends The ids of the friends to add to the Jam Mem
 * @returns The created Jam Mem
 * @throws An error if the request fails
 */
export const createJamMem = async ({
    ownerId,
    name,
    location,
    start,
    end,
    coverImage,
    friends,
}: JamMemCreationArgs) => {
    try {
        const response = await graphqlRequest<{
            jamMemCreateOne: { _id: string };
        }>(createJamMemMutationDocument, {
            ownerId,
            name,
            location,
            start,
            end,
            coverImage,
            friends,
        });
        return response.jamMemCreateOne._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to create Jam Mem");
    }
};

const updateJamMemMutationDocument = graphql(`
    mutation UpdateJamMemUser($id: MongoID!, $record: JamMemUpdateInput!) {
        jamMemUpdateById(_id: $id, record: $record) {
            _id
        }
    }
`);
interface UpdateJamMemArgs {
    id: string;
    record: {
        name?: string;
        location?: string;
        start?: Date;
        end?: Date;
        coverImage?: string;
    };
}
/**
 * Updates a Jam Mem
 * @param id The id of the Jam Mem to update
 * @param record The fields to update
 * @returns The id of the updated Jam Mem
 * @throws An error if the request fails
 */
export const updateJamMem = async ({ id, record }: UpdateJamMemArgs) => {
    try {
        const response = await graphqlRequest<{
            jamMemUpdateById: { _id: string };
        }>(updateJamMemMutationDocument, { id, record });
        return response.jamMemUpdateById._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to update Jam Mem");
    }
};

const deleteJamMemMutationDocument = graphql(`
    mutation deleteJamMem($id: MongoID!) {
        jamMemDeleteById(_id: $id) {
            _id
        }
    }
`);
/**
 * Deletes a Jam Mem
 * @param id The id of the Jam Mem to delete
 * @returns The id of the deleted Jam Mem
 * @throws An error if the request fails
 */
export const deleteJamMem = async (id: string): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            jamMemDeleteById: { _id: string };
        }>(deleteJamMemMutationDocument, { id });
        return response.jamMemDeleteById._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to delete Jam Mem");
    }
};

const jamMemAddFriendsMutationDocument = graphql(`
    mutation JamMemAddFriends($jamMemId: MongoID!, $friendIds: [MongoID!]!) {
        jamMemAddFriends(jamMemId: $jamMemId, friendIds: $friendIds) {
            _id
        }
    }
`);
interface AddFriendsToJamMemArgs {
    jamMemId: string;
    friendIds: string[];
}
/**
 * Adds friends to a Jam Mem
 * @param jamMemId The id of the Jam Mem to add friends to
 * @param friendIds The ids of the friends to add
 * @returns The id of the updated Jam Mem
 * @throws An error if the request fails
 */
export const addFriendsToJamMem = async ({
    jamMemId,
    friendIds,
}: AddFriendsToJamMemArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            jamMemAddFriends: { _id: string };
        }>(jamMemAddFriendsMutationDocument, { jamMemId, friendIds });
        return response.jamMemAddFriends._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to add friends to Jam Mem");
    }
};

const jamMemRemoveFriendMutationDocument = graphql(`
    mutation JamMemRemoveFriend($jamMemId: MongoID!, $friendId: MongoID!) {
        jamMemRemoveFriend(jamMemId: $jamMemId, friendId: $friendId) {
            _id
        }
    }
`);
interface RemoveFriendFromJamMemArgs {
    jamMemId: string;
    friendId: string;
}
/**
 * Removes a friend from a Jam Mem
 * @param jamMemId The id of the Jam Mem to remove the friend from
 * @param friendId The id of the friend to remove
 * @returns The id of the updated Jam Mem
 * @throws An error if the request fails
 */
export const removeFriendFromJamMem = async ({
    jamMemId,
    friendId,
}: RemoveFriendFromJamMemArgs): Promise<string> => {
    try {
        const response = await graphqlRequest<{
            jamMemRemoveFriend: { _id: string };
        }>(jamMemRemoveFriendMutationDocument, { jamMemId, friendId });
        return response.jamMemRemoveFriend._id;
    } catch (error) {
        console.error(formatError(error));
        throw new Error("Error: unable to remove friend from Jam Mem");
    }
};

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
        throw new Error("Error: unable to fetch Jam Mem Info");
    }
};

const JamMemByIdQueryDocument = graphql(`
    query JamMemById($id: MongoID!) {
        jamMemById(_id: $id) {
            _id
            name
            location
            start
            end
            friends {
                ...UserInfo
            }
            snapshots {
                ...SnapshotInfo
            }
        }
    }
`);
interface JamMemByIdResponse {
    jamMemById: {
        _id: string;
        name: string;
        location: string;
        start: Date;
        end: Date;
        friends: UserInfoFragment[];
    };
}
export const fetchJamMem = async (id: string): Promise<JamMem | null> => {
    if (!id) {
        return null;
    }
    try {
        const response = await graphqlRequest<JamMemByIdResponse>(
            JamMemByIdQueryDocument,
            { id }
        );
        const { _id, name, location, start, end, friends } =
            response.jamMemById;
        return {
            id: _id,
            name,
            location,
            start: new Date(start),
            end: new Date(end),
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
 * @param start The start date of the Jam Mem
 * @param end The end date of the Jam Mem
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

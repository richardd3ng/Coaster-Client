/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment UserInfo on User {\n        _id\n        username\n        displayName\n        profileUrl\n    }\n": types.UserInfoFragmentDoc,
    "\n    fragment SongInfo on Song {\n        _id\n        spotifyId\n        uri\n        name\n        artists\n        albumUrl\n        previewUrl\n    }\n": types.SongInfoFragmentDoc,
    "\n    fragment SnapshotInfo on Snapshot {\n        songId\n        latitude\n        longitude\n    }\n": types.SnapshotInfoFragmentDoc,
    "\n    fragment JamMemMetadata on Jam_Mem {\n        _id\n        ownerId\n        name\n        location\n        start\n        end\n        coverUrl\n    }\n": types.JamMemMetadataFragmentDoc,
    "\n    query JamMemByUserId($userId: MongoID!) {\n        jamMemByUserId(userId: $userId) {\n            ...JamMemMetadata\n        }\n    }\n": types.JamMemByUserIdDocument,
    "\n    query JamMemById($id: MongoID!) {\n        jamMemById(_id: $id) {\n            _id\n            name\n            location\n            start\n            end\n            friends {\n                ...UserInfo\n            }\n            snapshots {\n                ...SnapshotInfo\n            }\n        }\n    }\n": types.JamMemByIdDocument,
    "\n    mutation JamMemRemoveFriend($jamMemId: MongoID!, $friendId: MongoID!) {\n        jamMemRemoveFriend(jamMemId: $jamMemId, friendId: $friendId) {\n            _id\n        }\n    }\n": types.JamMemRemoveFriendDocument,
    "\n    query PlacesQuery($query: String!) {\n        placesQuery(query: $query) {\n            id\n            name\n            address\n            latitude\n            longitude\n            latitudeDelta\n            longitudeDelta\n        }\n    }\n": types.PlacesQueryDocument,
    "\n    query SnapshotByUserId($userId: MongoID!) {\n        snapshotByUserId(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n": types.SnapshotByUserIdDocument,
    "\n    query SnapshotByUserFriends($userId: MongoID!) {\n        snapshotByUserFriends(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n": types.SnapshotByUserFriendsDocument,
    "\n    query SnapshotByUserGlobal($userId: MongoID!) {\n        snapshotByUserGlobal(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n": types.SnapshotByUserGlobalDocument,
    "\n    query JamMemByIdSnapshots($id: MongoID!) {\n        jamMemById(_id: $id) {\n            snapshots {\n                ...SnapshotInfo\n            }\n        }\n    }\n": types.JamMemByIdSnapshotsDocument,
    "\n        mutation SnapshotCreateMany($snapshots: [CreateManySnapshotInput!]!) {\n            snapshotCreateMany(records: $snapshots) {\n                createdCount\n            }\n        }\n    ": types.SnapshotCreateManyDocument,
    "\n    query SongById($id: MongoID!) {\n        songById(_id: $id) {\n            ...SongInfo\n        }\n    }\n": types.SongByIdDocument,
    "\n    mutation SongCreateOrUpdate(\n        $spotifyId: String!\n        $uri: String!\n        $name: String!\n        $artists: [String!]!\n        $albumUrl: String\n        $previewUrl: String\n    ) {\n        songCreateOrUpdate(\n            spotifyId: $spotifyId\n            uri: $uri\n            name: $name\n            artists: $artists\n            albumUrl: $albumUrl\n            previewUrl: $previewUrl\n        ) {\n            _id\n        }\n    }\n": types.SongCreateOrUpdateDocument,
    "\n    query SongFetchRecentlyPlayed(\n        $accessToken: String!\n        $limit: Int\n        $after: Long!\n    ) {\n        songFetchRecentlyPlayed(\n            accessToken: $accessToken\n            limit: $limit\n            after: $after\n        ) {\n            spotifyId\n            uri\n            name\n            artists\n            albumUrl\n            previewUrl\n            timestamp\n        }\n    }\n": types.SongFetchRecentlyPlayedDocument,
    "\n    mutation SongCreatePlaylist(\n        $name: String!\n        $description: String!\n        $accessToken: String!\n        $songIds: [String!]!\n    ) {\n        songCreatePlaylist(\n            name: $name\n            description: $description\n            accessToken: $accessToken\n            songIds: $songIds\n        ) {\n            uri\n        }\n    }\n": types.SongCreatePlaylistDocument,
    "\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserInfoDocument,
    "\n    query FetchUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            shareSnapshots\n        }\n    }\n": types.FetchUserPreferencesDocument,
    "\n    mutation UpdateUserPreferences($id: MongoID!, $shareSnapshots: Boolean) {\n        userUpdateById(_id: $id, record: { shareSnapshots: $shareSnapshots }) {\n            recordId\n        }\n    }\n": types.UpdateUserPreferencesDocument,
    "\n    query UserFriends($id: MongoID!) {\n        userFriends(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.UserFriendsDocument,
    "\n    query FetchUserMoreResults($id: MongoID!, $query: String!) {\n        userMoreResults(_id: $id, query: $query) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserMoreResultsDocument,
    "\n    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {\n        userDeleteFriend(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n": types.UserDeleteFriendDocument,
    "\n    query FetchUserPendingRequests($id: MongoID!) {\n        userPendingRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserPendingRequestsDocument,
    "\n    query FetchUserSentRequests($id: MongoID!) {\n        userSentRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserSentRequestsDocument,
    "\n    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {\n        userSendRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n": types.UserSendRequestDocument,
    "\n    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {\n        userAcceptRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n": types.UserAcceptRequestDocument,
    "\n    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {\n        userCancelRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n": types.UserCancelRequestDocument,
    "\n    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {\n        userIgnoreRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n": types.UserIgnoreRequestDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment UserInfo on User {\n        _id\n        username\n        displayName\n        profileUrl\n    }\n"): (typeof documents)["\n    fragment UserInfo on User {\n        _id\n        username\n        displayName\n        profileUrl\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment SongInfo on Song {\n        _id\n        spotifyId\n        uri\n        name\n        artists\n        albumUrl\n        previewUrl\n    }\n"): (typeof documents)["\n    fragment SongInfo on Song {\n        _id\n        spotifyId\n        uri\n        name\n        artists\n        albumUrl\n        previewUrl\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment SnapshotInfo on Snapshot {\n        songId\n        latitude\n        longitude\n    }\n"): (typeof documents)["\n    fragment SnapshotInfo on Snapshot {\n        songId\n        latitude\n        longitude\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment JamMemMetadata on Jam_Mem {\n        _id\n        ownerId\n        name\n        location\n        start\n        end\n        coverUrl\n    }\n"): (typeof documents)["\n    fragment JamMemMetadata on Jam_Mem {\n        _id\n        ownerId\n        name\n        location\n        start\n        end\n        coverUrl\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JamMemByUserId($userId: MongoID!) {\n        jamMemByUserId(userId: $userId) {\n            ...JamMemMetadata\n        }\n    }\n"): (typeof documents)["\n    query JamMemByUserId($userId: MongoID!) {\n        jamMemByUserId(userId: $userId) {\n            ...JamMemMetadata\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JamMemById($id: MongoID!) {\n        jamMemById(_id: $id) {\n            _id\n            name\n            location\n            start\n            end\n            friends {\n                ...UserInfo\n            }\n            snapshots {\n                ...SnapshotInfo\n            }\n        }\n    }\n"): (typeof documents)["\n    query JamMemById($id: MongoID!) {\n        jamMemById(_id: $id) {\n            _id\n            name\n            location\n            start\n            end\n            friends {\n                ...UserInfo\n            }\n            snapshots {\n                ...SnapshotInfo\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation JamMemRemoveFriend($jamMemId: MongoID!, $friendId: MongoID!) {\n        jamMemRemoveFriend(jamMemId: $jamMemId, friendId: $friendId) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation JamMemRemoveFriend($jamMemId: MongoID!, $friendId: MongoID!) {\n        jamMemRemoveFriend(jamMemId: $jamMemId, friendId: $friendId) {\n            _id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PlacesQuery($query: String!) {\n        placesQuery(query: $query) {\n            id\n            name\n            address\n            latitude\n            longitude\n            latitudeDelta\n            longitudeDelta\n        }\n    }\n"): (typeof documents)["\n    query PlacesQuery($query: String!) {\n        placesQuery(query: $query) {\n            id\n            name\n            address\n            latitude\n            longitude\n            latitudeDelta\n            longitudeDelta\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SnapshotByUserId($userId: MongoID!) {\n        snapshotByUserId(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n"): (typeof documents)["\n    query SnapshotByUserId($userId: MongoID!) {\n        snapshotByUserId(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SnapshotByUserFriends($userId: MongoID!) {\n        snapshotByUserFriends(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n"): (typeof documents)["\n    query SnapshotByUserFriends($userId: MongoID!) {\n        snapshotByUserFriends(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SnapshotByUserGlobal($userId: MongoID!) {\n        snapshotByUserGlobal(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n"): (typeof documents)["\n    query SnapshotByUserGlobal($userId: MongoID!) {\n        snapshotByUserGlobal(userId: $userId) {\n            ...SnapshotInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query JamMemByIdSnapshots($id: MongoID!) {\n        jamMemById(_id: $id) {\n            snapshots {\n                ...SnapshotInfo\n            }\n        }\n    }\n"): (typeof documents)["\n    query JamMemByIdSnapshots($id: MongoID!) {\n        jamMemById(_id: $id) {\n            snapshots {\n                ...SnapshotInfo\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation SnapshotCreateMany($snapshots: [CreateManySnapshotInput!]!) {\n            snapshotCreateMany(records: $snapshots) {\n                createdCount\n            }\n        }\n    "): (typeof documents)["\n        mutation SnapshotCreateMany($snapshots: [CreateManySnapshotInput!]!) {\n            snapshotCreateMany(records: $snapshots) {\n                createdCount\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SongById($id: MongoID!) {\n        songById(_id: $id) {\n            ...SongInfo\n        }\n    }\n"): (typeof documents)["\n    query SongById($id: MongoID!) {\n        songById(_id: $id) {\n            ...SongInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SongCreateOrUpdate(\n        $spotifyId: String!\n        $uri: String!\n        $name: String!\n        $artists: [String!]!\n        $albumUrl: String\n        $previewUrl: String\n    ) {\n        songCreateOrUpdate(\n            spotifyId: $spotifyId\n            uri: $uri\n            name: $name\n            artists: $artists\n            albumUrl: $albumUrl\n            previewUrl: $previewUrl\n        ) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation SongCreateOrUpdate(\n        $spotifyId: String!\n        $uri: String!\n        $name: String!\n        $artists: [String!]!\n        $albumUrl: String\n        $previewUrl: String\n    ) {\n        songCreateOrUpdate(\n            spotifyId: $spotifyId\n            uri: $uri\n            name: $name\n            artists: $artists\n            albumUrl: $albumUrl\n            previewUrl: $previewUrl\n        ) {\n            _id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SongFetchRecentlyPlayed(\n        $accessToken: String!\n        $limit: Int\n        $after: Long!\n    ) {\n        songFetchRecentlyPlayed(\n            accessToken: $accessToken\n            limit: $limit\n            after: $after\n        ) {\n            spotifyId\n            uri\n            name\n            artists\n            albumUrl\n            previewUrl\n            timestamp\n        }\n    }\n"): (typeof documents)["\n    query SongFetchRecentlyPlayed(\n        $accessToken: String!\n        $limit: Int\n        $after: Long!\n    ) {\n        songFetchRecentlyPlayed(\n            accessToken: $accessToken\n            limit: $limit\n            after: $after\n        ) {\n            spotifyId\n            uri\n            name\n            artists\n            albumUrl\n            previewUrl\n            timestamp\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SongCreatePlaylist(\n        $name: String!\n        $description: String!\n        $accessToken: String!\n        $songIds: [String!]!\n    ) {\n        songCreatePlaylist(\n            name: $name\n            description: $description\n            accessToken: $accessToken\n            songIds: $songIds\n        ) {\n            uri\n        }\n    }\n"): (typeof documents)["\n    mutation SongCreatePlaylist(\n        $name: String!\n        $description: String!\n        $accessToken: String!\n        $songIds: [String!]!\n    ) {\n        songCreatePlaylist(\n            name: $name\n            description: $description\n            accessToken: $accessToken\n            songIds: $songIds\n        ) {\n            uri\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            shareSnapshots\n        }\n    }\n"): (typeof documents)["\n    query FetchUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            shareSnapshots\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserPreferences($id: MongoID!, $shareSnapshots: Boolean) {\n        userUpdateById(_id: $id, record: { shareSnapshots: $shareSnapshots }) {\n            recordId\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserPreferences($id: MongoID!, $shareSnapshots: Boolean) {\n        userUpdateById(_id: $id, record: { shareSnapshots: $shareSnapshots }) {\n            recordId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query UserFriends($id: MongoID!) {\n        userFriends(_id: $id) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query UserFriends($id: MongoID!) {\n        userFriends(_id: $id) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserMoreResults($id: MongoID!, $query: String!) {\n        userMoreResults(_id: $id, query: $query) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserMoreResults($id: MongoID!, $query: String!) {\n        userMoreResults(_id: $id, query: $query) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {\n        userDeleteFriend(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {\n        userDeleteFriend(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserPendingRequests($id: MongoID!) {\n        userPendingRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserPendingRequests($id: MongoID!) {\n        userPendingRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserSentRequests($id: MongoID!) {\n        userSentRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserSentRequests($id: MongoID!) {\n        userSentRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {\n        userSendRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {\n        userSendRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {\n        userAcceptRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {\n        userAcceptRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {\n        userCancelRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {\n        userCancelRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {\n        userIgnoreRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"): (typeof documents)["\n    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {\n        userIgnoreRequest(_id: $id, friendId: $friendId) {\n            _id\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
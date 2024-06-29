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
    "\n    mutation LocationCreateMany($locations: [CreateManyLocationInput!]!) {\n        locationCreateMany(records: $locations) {\n            records {\n                userId\n                latitude\n                longitude\n                timestamp\n            }\n        }\n    }\n": types.LocationCreateManyDocument,
    "\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserInfoDocument,
    "\n    query FetchUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            trackSnapshots\n            shareSnapshots\n        }\n    }\n": types.FetchUserPreferencesDocument,
    "\n    mutation UpdateUserPreferences(\n        $id: MongoID!\n        $shareSnapshots: Boolean\n        $trackSnapshots: Boolean\n    ) {\n        userUpdateById(\n            _id: $id\n            record: {\n                shareSnapshots: $shareSnapshots\n                trackSnapshots: $trackSnapshots\n            }\n        ) {\n            record {\n                trackSnapshots\n                shareSnapshots\n            }\n        }\n    }\n": types.UpdateUserPreferencesDocument,
    "\n    query FetchUserFriends($id: MongoID!) {\n        userFriends(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserFriendsDocument,
    "\n    query FetchUserMoreResults($id: MongoID!, $query: String!) {\n        userMoreResults(_id: $id, query: $query) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserMoreResultsDocument,
    "\n    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {\n        userDeleteFriend(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n": types.UserDeleteFriendDocument,
    "\n    query FetchUserPendingRequests($id: MongoID!) {\n        userPendingRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserPendingRequestsDocument,
    "\n    query FetchUserSentRequests($id: MongoID!) {\n        userSentRequests(_id: $id) {\n            ...UserInfo\n        }\n    }\n": types.FetchUserSentRequestsDocument,
    "\n    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {\n        userSendRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n": types.UserSendRequestDocument,
    "\n    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {\n        userAcceptRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n": types.UserAcceptRequestDocument,
    "\n    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {\n        userCancelRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n": types.UserCancelRequestDocument,
    "\n    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {\n        userIgnoreRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n": types.UserIgnoreRequestDocument,
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
export function graphql(source: "\n    mutation LocationCreateMany($locations: [CreateManyLocationInput!]!) {\n        locationCreateMany(records: $locations) {\n            records {\n                userId\n                latitude\n                longitude\n                timestamp\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation LocationCreateMany($locations: [CreateManyLocationInput!]!) {\n        locationCreateMany(records: $locations) {\n            records {\n                userId\n                latitude\n                longitude\n                timestamp\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            trackSnapshots\n            shareSnapshots\n        }\n    }\n"): (typeof documents)["\n    query FetchUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            trackSnapshots\n            shareSnapshots\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserPreferences(\n        $id: MongoID!\n        $shareSnapshots: Boolean\n        $trackSnapshots: Boolean\n    ) {\n        userUpdateById(\n            _id: $id\n            record: {\n                shareSnapshots: $shareSnapshots\n                trackSnapshots: $trackSnapshots\n            }\n        ) {\n            record {\n                trackSnapshots\n                shareSnapshots\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserPreferences(\n        $id: MongoID!\n        $shareSnapshots: Boolean\n        $trackSnapshots: Boolean\n    ) {\n        userUpdateById(\n            _id: $id\n            record: {\n                shareSnapshots: $shareSnapshots\n                trackSnapshots: $trackSnapshots\n            }\n        ) {\n            record {\n                trackSnapshots\n                shareSnapshots\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserFriends($id: MongoID!) {\n        userFriends(_id: $id) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserFriends($id: MongoID!) {\n        userFriends(_id: $id) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query FetchUserMoreResults($id: MongoID!, $query: String!) {\n        userMoreResults(_id: $id, query: $query) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    query FetchUserMoreResults($id: MongoID!, $query: String!) {\n        userMoreResults(_id: $id, query: $query) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {\n        userDeleteFriend(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    mutation UserDeleteFriend($id: MongoID!, $friendId: MongoID!) {\n        userDeleteFriend(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"];
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
export function graphql(source: "\n    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {\n        userSendRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    mutation UserSendRequest($id: MongoID!, $friendId: MongoID!) {\n        userSendRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {\n        userAcceptRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    mutation UserAcceptRequest($id: MongoID!, $friendId: MongoID!) {\n        userAcceptRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {\n        userCancelRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    mutation UserCancelRequest($id: MongoID!, $friendId: MongoID!) {\n        userCancelRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {\n        userIgnoreRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"): (typeof documents)["\n    mutation UserIgnoreRequest($id: MongoID!, $friendId: MongoID!) {\n        userIgnoreRequest(_id: $id, friendId: $friendId) {\n            ...UserInfo\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
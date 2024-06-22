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
    "\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            _id\n            username\n            displayName\n            profileUri\n        }\n    }\n": types.FetchUserInfoDocument,
    "\n    query GetUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            trackSnapshots\n            shareSnapshots\n        }\n    }\n": types.GetUserPreferencesDocument,
    "\n    mutation UpdateUserPreferences(\n        $id: MongoID!\n        $shareSnapshots: Boolean\n        $trackSnapshots: Boolean\n    ) {\n        userUpdateById(\n            _id: $id\n            record: {\n                shareSnapshots: $shareSnapshots\n                trackSnapshots: $trackSnapshots\n            }\n        ) {\n            record {\n                trackSnapshots\n                shareSnapshots\n            }\n        }\n    }\n": types.UpdateUserPreferencesDocument,
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
export function graphql(source: "\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            _id\n            username\n            displayName\n            profileUri\n        }\n    }\n"): (typeof documents)["\n    query FetchUserInfo($id: MongoID!) {\n        userById(_id: $id) {\n            _id\n            username\n            displayName\n            profileUri\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            trackSnapshots\n            shareSnapshots\n        }\n    }\n"): (typeof documents)["\n    query GetUserPreferences($id: MongoID!) {\n        userById(_id: $id) {\n            trackSnapshots\n            shareSnapshots\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUserPreferences(\n        $id: MongoID!\n        $shareSnapshots: Boolean\n        $trackSnapshots: Boolean\n    ) {\n        userUpdateById(\n            _id: $id\n            record: {\n                shareSnapshots: $shareSnapshots\n                trackSnapshots: $trackSnapshots\n            }\n        ) {\n            record {\n                trackSnapshots\n                shareSnapshots\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUserPreferences(\n        $id: MongoID!\n        $shareSnapshots: Boolean\n        $trackSnapshots: Boolean\n    ) {\n        userUpdateById(\n            _id: $id\n            record: {\n                shareSnapshots: $shareSnapshots\n                trackSnapshots: $trackSnapshots\n            }\n        ) {\n            record {\n                trackSnapshots\n                shareSnapshots\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
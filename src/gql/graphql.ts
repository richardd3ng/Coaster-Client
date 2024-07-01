/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: { input: any; output: any; }
};

export type CreateManySnapshotInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  songId: Scalars['MongoID']['input'];
  timestamp: Scalars['Float']['input'];
  userId: Scalars['MongoID']['input'];
};

export type CreateManySnapshotPayload = {
  __typename?: 'CreateManySnapshotPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Snapshot>>;
};

export enum EnumUserDataPersistence {
  A_1Month = 'a_1_Month',
  A_1Week = 'a_1_Week',
  A_1Year = 'a_1_Year'
}

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  snapshotCreateMany?: Maybe<CreateManySnapshotPayload>;
  songCreateOrUpdate?: Maybe<Song>;
  userAcceptRequest?: Maybe<User>;
  userCancelRequest?: Maybe<User>;
  userDeleteFriend?: Maybe<User>;
  userIgnoreRequest?: Maybe<User>;
  userSendRequest?: Maybe<User>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
};


export type MutationSnapshotCreateManyArgs = {
  records: Array<CreateManySnapshotInput>;
};


export type MutationSongCreateOrUpdateArgs = {
  albumUrl: Scalars['String']['input'];
  artists: Array<InputMaybe<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  spotifyId: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};


export type MutationUserAcceptRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserCancelRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserDeleteFriendArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserIgnoreRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserSendRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdUserInput;
};

export type Query = {
  __typename?: 'Query';
  snapshotByUserFriends?: Maybe<Array<Maybe<Snapshot>>>;
  snapshotByUserGlobal?: Maybe<Array<Maybe<Snapshot>>>;
  snapshotByUserId?: Maybe<Array<Maybe<Snapshot>>>;
  songById?: Maybe<Song>;
  songByIds: Array<Song>;
  userById?: Maybe<User>;
  userFriends?: Maybe<Array<Maybe<User>>>;
  userMoreResults?: Maybe<Array<Maybe<User>>>;
  userPendingRequests?: Maybe<Array<Maybe<User>>>;
  userSentRequests?: Maybe<Array<Maybe<User>>>;
};


export type QuerySnapshotByUserFriendsArgs = {
  userId: Scalars['MongoID']['input'];
};


export type QuerySnapshotByUserGlobalArgs = {
  userId: Scalars['MongoID']['input'];
};


export type QuerySnapshotByUserIdArgs = {
  userId: Scalars['MongoID']['input'];
};


export type QuerySongByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QuerySongByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSongInput>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserFriendsArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserMoreResultsArgs = {
  _id: Scalars['MongoID']['input'];
  query: Scalars['String']['input'];
};


export type QueryUserPendingRequestsArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserSentRequestsArgs = {
  _id: Scalars['MongoID']['input'];
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Snapshot = {
  __typename?: 'Snapshot';
  _id: Scalars['MongoID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  songId: Scalars['MongoID']['output'];
  timestamp: Scalars['Float']['output'];
  userId: Scalars['MongoID']['output'];
};

export type Song = {
  __typename?: 'Song';
  _id: Scalars['MongoID']['output'];
  albumUrl: Scalars['String']['output'];
  artists: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  spotifyId: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export enum SortFindByIdsSongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  encryptedAccessToken?: InputMaybe<Scalars['String']['input']>;
  encryptedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  jamSessions?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  locationAccuracy?: InputMaybe<Scalars['Float']['input']>;
  pendingRequests?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  sentRequests?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  shareSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
  snapshots?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  trackSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['MongoID']['output'];
  dataPersistence?: Maybe<EnumUserDataPersistence>;
  displayName: Scalars['String']['output'];
  encryptedAccessToken?: Maybe<Scalars['String']['output']>;
  encryptedRefreshToken?: Maybe<Scalars['String']['output']>;
  friends?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  jamSessions?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  locationAccuracy?: Maybe<Scalars['Float']['output']>;
  pendingRequests?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  profileUrl?: Maybe<Scalars['String']['output']>;
  sentRequests?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  shareSnapshots?: Maybe<Scalars['Boolean']['output']>;
  snapshots?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  spotifyId: Scalars['String']['output'];
  trackSnapshots?: Maybe<Scalars['Boolean']['output']>;
  username: Scalars['String']['output'];
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']['output']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int']['output'];
  /** Validation error message */
  message?: Maybe<Scalars['String']['output']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']['output']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type UserInfoFragment = { __typename?: 'User', _id: any, username: string, displayName: string, profileUrl?: string | null } & { ' $fragmentName'?: 'UserInfoFragment' };

export type SongInfoFragment = { __typename?: 'Song', _id: any, spotifyId: string, uri: string, name: string, artists: Array<string | null>, albumUrl: string } & { ' $fragmentName'?: 'SongInfoFragment' };

export type SnapshotInfoFragment = { __typename?: 'Snapshot', songId: any, latitude: number, longitude: number } & { ' $fragmentName'?: 'SnapshotInfoFragment' };

export type SnapshotByUserIdQueryVariables = Exact<{
  userId: Scalars['MongoID']['input'];
}>;


export type SnapshotByUserIdQuery = { __typename?: 'Query', snapshotByUserId?: Array<(
    { __typename?: 'Snapshot' }
    & { ' $fragmentRefs'?: { 'SnapshotInfoFragment': SnapshotInfoFragment } }
  ) | null> | null };

export type SnapshotByUserFriendsQueryVariables = Exact<{
  userId: Scalars['MongoID']['input'];
}>;


export type SnapshotByUserFriendsQuery = { __typename?: 'Query', snapshotByUserFriends?: Array<(
    { __typename?: 'Snapshot' }
    & { ' $fragmentRefs'?: { 'SnapshotInfoFragment': SnapshotInfoFragment } }
  ) | null> | null };

export type SnapshotByUserGlobalQueryVariables = Exact<{
  userId: Scalars['MongoID']['input'];
}>;


export type SnapshotByUserGlobalQuery = { __typename?: 'Query', snapshotByUserGlobal?: Array<(
    { __typename?: 'Snapshot' }
    & { ' $fragmentRefs'?: { 'SnapshotInfoFragment': SnapshotInfoFragment } }
  ) | null> | null };

export type SnapshotCreateManyMutationVariables = Exact<{
  snapshots: Array<CreateManySnapshotInput> | CreateManySnapshotInput;
}>;


export type SnapshotCreateManyMutation = { __typename?: 'Mutation', snapshotCreateMany?: { __typename?: 'CreateManySnapshotPayload', createdCount: number } | null };

export type SongByIdQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type SongByIdQuery = { __typename?: 'Query', songById?: (
    { __typename?: 'Song' }
    & { ' $fragmentRefs'?: { 'SongInfoFragment': SongInfoFragment } }
  ) | null };

export type SongCreateOrUpdateMutationVariables = Exact<{
  spotifyId: Scalars['String']['input'];
  uri: Scalars['String']['input'];
  name: Scalars['String']['input'];
  artists: Array<Scalars['String']['input']> | Scalars['String']['input'];
  albumUrl: Scalars['String']['input'];
}>;


export type SongCreateOrUpdateMutation = { __typename?: 'Mutation', songCreateOrUpdate?: { __typename?: 'Song', _id: any } | null };

export type SongByIdsQueryVariables = Exact<{
  ids: Array<Scalars['MongoID']['input']> | Scalars['MongoID']['input'];
}>;


export type SongByIdsQuery = { __typename?: 'Query', songByIds: Array<{ __typename?: 'Song', spotifyId: string }> };

export type FetchUserInfoQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type FetchUserInfoQuery = { __typename?: 'Query', userById?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export type FetchUserPreferencesQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type FetchUserPreferencesQuery = { __typename?: 'Query', userById?: { __typename?: 'User', shareSnapshots?: boolean | null } | null };

export type UpdateUserPreferencesMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  shareSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateUserPreferencesMutation = { __typename?: 'Mutation', userUpdateById?: { __typename?: 'UpdateByIdUserPayload', record?: { __typename?: 'User', shareSnapshots?: boolean | null } | null } | null };

export type FetchUserFriendsQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type FetchUserFriendsQuery = { __typename?: 'Query', userFriends?: Array<(
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null> | null };

export type FetchUserMoreResultsQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
  query: Scalars['String']['input'];
}>;


export type FetchUserMoreResultsQuery = { __typename?: 'Query', userMoreResults?: Array<(
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null> | null };

export type UserDeleteFriendMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserDeleteFriendMutation = { __typename?: 'Mutation', userDeleteFriend?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export type FetchUserPendingRequestsQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type FetchUserPendingRequestsQuery = { __typename?: 'Query', userPendingRequests?: Array<(
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null> | null };

export type FetchUserSentRequestsQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type FetchUserSentRequestsQuery = { __typename?: 'Query', userSentRequests?: Array<(
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null> | null };

export type UserSendRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserSendRequestMutation = { __typename?: 'Mutation', userSendRequest?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export type UserAcceptRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserAcceptRequestMutation = { __typename?: 'Mutation', userAcceptRequest?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export type UserCancelRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserCancelRequestMutation = { __typename?: 'Mutation', userCancelRequest?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export type UserIgnoreRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserIgnoreRequestMutation = { __typename?: 'Mutation', userIgnoreRequest?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export const UserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserInfoFragment, unknown>;
export const SongInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SongInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Song"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artists"}},{"kind":"Field","name":{"kind":"Name","value":"albumUrl"}}]}}]} as unknown as DocumentNode<SongInfoFragment, unknown>;
export const SnapshotInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotInfoFragment, unknown>;
export const SnapshotByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SnapshotByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotByUserIdQuery, SnapshotByUserIdQueryVariables>;
export const SnapshotByUserFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SnapshotByUserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotByUserFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotByUserFriendsQuery, SnapshotByUserFriendsQueryVariables>;
export const SnapshotByUserGlobalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SnapshotByUserGlobal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotByUserGlobal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotByUserGlobalQuery, SnapshotByUserGlobalQueryVariables>;
export const SnapshotCreateManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SnapshotCreateMany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"snapshots"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManySnapshotInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotCreateMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"records"},"value":{"kind":"Variable","name":{"kind":"Name","value":"snapshots"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdCount"}}]}}]}}]} as unknown as DocumentNode<SnapshotCreateManyMutation, SnapshotCreateManyMutationVariables>;
export const SongByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SongInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SongInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Song"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artists"}},{"kind":"Field","name":{"kind":"Name","value":"albumUrl"}}]}}]} as unknown as DocumentNode<SongByIdQuery, SongByIdQueryVariables>;
export const SongCreateOrUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SongCreateOrUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spotifyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artists"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"albumUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songCreateOrUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spotifyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spotifyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"artists"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artists"}}},{"kind":"Argument","name":{"kind":"Name","value":"albumUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"albumUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<SongCreateOrUpdateMutation, SongCreateOrUpdateMutationVariables>;
export const SongByIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongByIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}}]}}]}}]} as unknown as DocumentNode<SongByIdsQuery, SongByIdsQueryVariables>;
export const FetchUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserInfoQuery, FetchUserInfoQueryVariables>;
export const FetchUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]} as unknown as DocumentNode<FetchUserPreferencesQuery, FetchUserPreferencesQueryVariables>;
export const UpdateUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shareSnapshots"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shareSnapshots"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shareSnapshots"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>;
export const FetchUserFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserFriendsQuery, FetchUserFriendsQueryVariables>;
export const FetchUserMoreResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserMoreResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMoreResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserMoreResultsQuery, FetchUserMoreResultsQueryVariables>;
export const UserDeleteFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeleteFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeleteFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserDeleteFriendMutation, UserDeleteFriendMutationVariables>;
export const FetchUserPendingRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPendingRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPendingRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserPendingRequestsQuery, FetchUserPendingRequestsQueryVariables>;
export const FetchUserSentRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserSentRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSentRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserSentRequestsQuery, FetchUserSentRequestsQueryVariables>;
export const UserSendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserSendRequestMutation, UserSendRequestMutationVariables>;
export const UserAcceptRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAcceptRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAcceptRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserAcceptRequestMutation, UserAcceptRequestMutationVariables>;
export const UserCancelRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserCancelRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCancelRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserCancelRequestMutation, UserCancelRequestMutationVariables>;
export const UserIgnoreRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserIgnoreRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userIgnoreRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserIgnoreRequestMutation, UserIgnoreRequestMutationVariables>;
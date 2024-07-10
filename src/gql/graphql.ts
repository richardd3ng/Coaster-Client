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
  Date: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A 64-bit integer */
  Long: { input: any; output: any; }
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

export type CreatePlaylistResponse = {
  __typename?: 'CreatePlaylistResponse';
  uri: Scalars['String']['output'];
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

export type JamMemInfo = {
  __typename?: 'JamMemInfo';
  _id: Scalars['MongoID']['output'];
  coverUrl?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  friends?: Maybe<Array<Maybe<User>>>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['MongoID']['output'];
  snapshots?: Maybe<Array<Maybe<Snapshot>>>;
  start: Scalars['Date']['output'];
};

export type JamMemUpdateInput = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
};

export type Jam_Mem = {
  __typename?: 'Jam_Mem';
  _id: Scalars['MongoID']['output'];
  coverUrl?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  friends?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['MongoID']['output'];
  snapshots?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  start: Scalars['Date']['output'];
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
  jamMemAddFriends?: Maybe<Jam_Mem>;
  jamMemCreateOne?: Maybe<Jam_Mem>;
  jamMemDeleteById?: Maybe<Jam_Mem>;
  jamMemRemoveFriend?: Maybe<Jam_Mem>;
  jamMemUpdateById?: Maybe<Jam_Mem>;
  snapshotClearHistory?: Maybe<Scalars['Boolean']['output']>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  snapshotCreateMany?: Maybe<CreateManySnapshotPayload>;
  songCreateOrUpdate?: Maybe<Song>;
  songCreatePlaylist?: Maybe<CreatePlaylistResponse>;
  userAcceptRequest?: Maybe<User>;
  userCancelRequest?: Maybe<User>;
  userDeleteFriend?: Maybe<User>;
  userIgnoreRequest?: Maybe<User>;
  userSendRequest?: Maybe<User>;
  userUpdateById?: Maybe<User>;
};


export type MutationJamMemAddFriendsArgs = {
  friendIds: Array<InputMaybe<Scalars['MongoID']['input']>>;
  jamMemId: Scalars['MongoID']['input'];
};


export type MutationJamMemCreateOneArgs = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  end: Scalars['Date']['input'];
  friends?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  ownerId: Scalars['MongoID']['input'];
  start: Scalars['Date']['input'];
};


export type MutationJamMemDeleteByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationJamMemRemoveFriendArgs = {
  friendId: Scalars['MongoID']['input'];
  jamMemId: Scalars['MongoID']['input'];
};


export type MutationJamMemUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record?: InputMaybe<JamMemUpdateInput>;
};


export type MutationSnapshotClearHistoryArgs = {
  end: Scalars['Date']['input'];
  start: Scalars['Date']['input'];
  userId: Scalars['MongoID']['input'];
};


export type MutationSnapshotCreateManyArgs = {
  records: Array<CreateManySnapshotInput>;
};


export type MutationSongCreateOrUpdateArgs = {
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists: Array<InputMaybe<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  spotifyId: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};


export type MutationSongCreatePlaylistArgs = {
  accessToken: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  songIds: Array<Scalars['String']['input']>;
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
  record?: InputMaybe<UserUpdateInput>;
};

export type Places = {
  __typename?: 'Places';
  address: Scalars['String']['output'];
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  latitudeDelta: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  longitudeDelta: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  jamMemById?: Maybe<JamMemInfo>;
  jamMemByUserId?: Maybe<Array<Maybe<Jam_Mem>>>;
  placesQuery?: Maybe<Array<Maybe<Places>>>;
  snapshotByUserFriends?: Maybe<Array<Maybe<Snapshot>>>;
  snapshotByUserGlobal?: Maybe<Array<Maybe<Snapshot>>>;
  snapshotByUserId?: Maybe<Array<Maybe<Snapshot>>>;
  songById?: Maybe<Song>;
  songFetchRecentlyPlayed?: Maybe<Array<Maybe<RecentlyPlayedSong>>>;
  userById?: Maybe<User>;
  userFriends?: Maybe<Array<Maybe<User>>>;
  userMoreResults?: Maybe<Array<Maybe<User>>>;
  userPendingRequests?: Maybe<Array<Maybe<User>>>;
  userSentRequests?: Maybe<Array<Maybe<User>>>;
};


export type QueryJamMemByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryJamMemByUserIdArgs = {
  userId: Scalars['MongoID']['input'];
};


export type QueryPlacesQueryArgs = {
  query: Scalars['String']['input'];
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


export type QuerySongFetchRecentlyPlayedArgs = {
  accessToken: Scalars['String']['input'];
  after: Scalars['Long']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
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

export type RecentlyPlayedSong = {
  __typename?: 'RecentlyPlayedSong';
  albumUrl?: Maybe<Scalars['String']['output']>;
  artists: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  spotifyId: Scalars['String']['output'];
  timestamp: Scalars['Long']['output'];
  uri: Scalars['String']['output'];
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
  albumUrl?: Maybe<Scalars['String']['output']>;
  artists: Array<Maybe<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  spotifyId: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['MongoID']['output'];
  dataPersistence?: Maybe<EnumUserDataPersistence>;
  displayName: Scalars['String']['output'];
  encryptedAccessToken?: Maybe<Scalars['String']['output']>;
  encryptedRefreshToken?: Maybe<Scalars['String']['output']>;
  friends?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  locationAccuracy?: Maybe<Scalars['Float']['output']>;
  pendingRequests?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  profileUrl?: Maybe<Scalars['String']['output']>;
  sentRequests?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  shareSnapshots?: Maybe<Scalars['Boolean']['output']>;
  spotifyId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserUpdateInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  shareSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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

export type SongInfoFragment = { __typename?: 'Song', _id: any, spotifyId: string, uri: string, name: string, artists: Array<string | null>, albumUrl?: string | null, previewUrl?: string | null } & { ' $fragmentName'?: 'SongInfoFragment' };

export type SnapshotInfoFragment = { __typename?: 'Snapshot', songId: any, latitude: number, longitude: number } & { ' $fragmentName'?: 'SnapshotInfoFragment' };

export type JamMemMetadataFragment = { __typename?: 'Jam_Mem', _id: any, ownerId: any, name: string, location: string, start: any, end: any, coverUrl?: string | null } & { ' $fragmentName'?: 'JamMemMetadataFragment' };

export type JamMemByUserIdQueryVariables = Exact<{
  userId: Scalars['MongoID']['input'];
}>;


export type JamMemByUserIdQuery = { __typename?: 'Query', jamMemByUserId?: Array<(
    { __typename?: 'Jam_Mem' }
    & { ' $fragmentRefs'?: { 'JamMemMetadataFragment': JamMemMetadataFragment } }
  ) | null> | null };

export type JamMemByIdQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type JamMemByIdQuery = { __typename?: 'Query', jamMemById?: { __typename?: 'JamMemInfo', _id: any, name: string, location: string, start: any, end: any, coverUrl?: string | null, friends?: Array<(
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
    ) | null> | null } | null };

export type CreateJamMemMutationVariables = Exact<{
  ownerId: Scalars['MongoID']['input'];
  name: Scalars['String']['input'];
  location: Scalars['String']['input'];
  start: Scalars['Date']['input'];
  end: Scalars['Date']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<Scalars['MongoID']['input']> | Scalars['MongoID']['input']>;
}>;


export type CreateJamMemMutation = { __typename?: 'Mutation', jamMemCreateOne?: { __typename?: 'Jam_Mem', _id: any } | null };

export type UpdateJamMemUserMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  record: JamMemUpdateInput;
}>;


export type UpdateJamMemUserMutation = { __typename?: 'Mutation', jamMemUpdateById?: { __typename?: 'Jam_Mem', _id: any } | null };

export type DeleteJamMemMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type DeleteJamMemMutation = { __typename?: 'Mutation', jamMemDeleteById?: { __typename?: 'Jam_Mem', _id: any } | null };

export type JamMemAddFriendsMutationVariables = Exact<{
  jamMemId: Scalars['MongoID']['input'];
  friendIds: Array<Scalars['MongoID']['input']> | Scalars['MongoID']['input'];
}>;


export type JamMemAddFriendsMutation = { __typename?: 'Mutation', jamMemAddFriends?: { __typename?: 'Jam_Mem', _id: any } | null };

export type JamMemRemoveFriendMutationVariables = Exact<{
  jamMemId: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type JamMemRemoveFriendMutation = { __typename?: 'Mutation', jamMemRemoveFriend?: { __typename?: 'Jam_Mem', _id: any } | null };

export type PlacesQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type PlacesQueryQuery = { __typename?: 'Query', placesQuery?: Array<{ __typename?: 'Places', id: string, name: string, address: string, latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number } | null> | null };

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

export type JamMemByIdSnapshotsQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type JamMemByIdSnapshotsQuery = { __typename?: 'Query', jamMemById?: { __typename?: 'JamMemInfo', snapshots?: Array<(
      { __typename?: 'Snapshot' }
      & { ' $fragmentRefs'?: { 'SnapshotInfoFragment': SnapshotInfoFragment } }
    ) | null> | null } | null };

export type SnapshotCreateManyMutationVariables = Exact<{
  snapshots: Array<CreateManySnapshotInput> | CreateManySnapshotInput;
}>;


export type SnapshotCreateManyMutation = { __typename?: 'Mutation', snapshotCreateMany?: { __typename?: 'CreateManySnapshotPayload', createdCount: number } | null };

export type SnapshotClearHistoryMutationVariables = Exact<{
  userId: Scalars['MongoID']['input'];
  start: Scalars['Date']['input'];
  end: Scalars['Date']['input'];
}>;


export type SnapshotClearHistoryMutation = { __typename?: 'Mutation', snapshotClearHistory?: boolean | null };

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
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
}>;


export type SongCreateOrUpdateMutation = { __typename?: 'Mutation', songCreateOrUpdate?: { __typename?: 'Song', _id: any } | null };

export type SongFetchRecentlyPlayedQueryVariables = Exact<{
  accessToken: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  after: Scalars['Long']['input'];
}>;


export type SongFetchRecentlyPlayedQuery = { __typename?: 'Query', songFetchRecentlyPlayed?: Array<{ __typename?: 'RecentlyPlayedSong', spotifyId: string, uri: string, name: string, artists: Array<string | null>, albumUrl?: string | null, previewUrl?: string | null, timestamp: any } | null> | null };

export type SongCreatePlaylistMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  accessToken: Scalars['String']['input'];
  songIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type SongCreatePlaylistMutation = { __typename?: 'Mutation', songCreatePlaylist?: { __typename?: 'CreatePlaylistResponse', uri: string } | null };

export type FetchUserPreferencesQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type FetchUserPreferencesQuery = { __typename?: 'Query', userById?: { __typename?: 'User', shareSnapshots?: boolean | null } | null };

export type UpdateUserPreferencesMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  record: UserUpdateInput;
}>;


export type UpdateUserPreferencesMutation = { __typename?: 'Mutation', userUpdateById?: { __typename?: 'User', _id: any } | null };

export type UpdateUserProfileMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  record: UserUpdateInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', userUpdateById?: { __typename?: 'User', _id: any, spotifyId: string, username: string, displayName: string, profileUrl?: string | null, shareSnapshots?: boolean | null } | null };

export type UserFriendsQueryVariables = Exact<{
  id: Scalars['MongoID']['input'];
}>;


export type UserFriendsQuery = { __typename?: 'Query', userFriends?: Array<(
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


export type UserDeleteFriendMutation = { __typename?: 'Mutation', userDeleteFriend?: { __typename?: 'User', _id: any } | null };

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


export type UserSendRequestMutation = { __typename?: 'Mutation', userSendRequest?: { __typename?: 'User', _id: any } | null };

export type UserAcceptRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserAcceptRequestMutation = { __typename?: 'Mutation', userAcceptRequest?: { __typename?: 'User', _id: any } | null };

export type UserCancelRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserCancelRequestMutation = { __typename?: 'Mutation', userCancelRequest?: { __typename?: 'User', _id: any } | null };

export type UserIgnoreRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserIgnoreRequestMutation = { __typename?: 'Mutation', userIgnoreRequest?: { __typename?: 'User', _id: any } | null };

export const UserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserInfoFragment, unknown>;
export const SongInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SongInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Song"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artists"}},{"kind":"Field","name":{"kind":"Name","value":"albumUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]} as unknown as DocumentNode<SongInfoFragment, unknown>;
export const SnapshotInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotInfoFragment, unknown>;
export const JamMemMetadataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JamMemMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Jam_Mem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}}]} as unknown as DocumentNode<JamMemMetadataFragment, unknown>;
export const JamMemByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JamMemByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JamMemMetadata"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JamMemMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Jam_Mem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}}]} as unknown as DocumentNode<JamMemByUserIdQuery, JamMemByUserIdQueryVariables>;
export const JamMemByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JamMemById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"friends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<JamMemByIdQuery, JamMemByIdQueryVariables>;
export const CreateJamMemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJamMem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coverImage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friends"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemCreateOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ownerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"end"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}},{"kind":"Argument","name":{"kind":"Name","value":"coverImage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coverImage"}}},{"kind":"Argument","name":{"kind":"Name","value":"friends"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friends"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateJamMemMutation, CreateJamMemMutationVariables>;
export const UpdateJamMemUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateJamMemUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JamMemUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemUpdateById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UpdateJamMemUserMutation, UpdateJamMemUserMutationVariables>;
export const DeleteJamMemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteJamMem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemDeleteById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<DeleteJamMemMutation, DeleteJamMemMutationVariables>;
export const JamMemAddFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JamMemAddFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jamMemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemAddFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jamMemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jamMemId"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<JamMemAddFriendsMutation, JamMemAddFriendsMutationVariables>;
export const JamMemRemoveFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JamMemRemoveFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jamMemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemRemoveFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"jamMemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jamMemId"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<JamMemRemoveFriendMutation, JamMemRemoveFriendMutationVariables>;
export const PlacesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlacesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placesQuery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitudeDelta"}},{"kind":"Field","name":{"kind":"Name","value":"longitudeDelta"}}]}}]}}]} as unknown as DocumentNode<PlacesQueryQuery, PlacesQueryQueryVariables>;
export const SnapshotByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SnapshotByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotByUserIdQuery, SnapshotByUserIdQueryVariables>;
export const SnapshotByUserFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SnapshotByUserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotByUserFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotByUserFriendsQuery, SnapshotByUserFriendsQueryVariables>;
export const SnapshotByUserGlobalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SnapshotByUserGlobal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotByUserGlobal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<SnapshotByUserGlobalQuery, SnapshotByUserGlobalQueryVariables>;
export const JamMemByIdSnapshotsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JamMemByIdSnapshots"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jamMemById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SnapshotInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SnapshotInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Snapshot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]} as unknown as DocumentNode<JamMemByIdSnapshotsQuery, JamMemByIdSnapshotsQueryVariables>;
export const SnapshotCreateManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SnapshotCreateMany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"snapshots"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManySnapshotInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotCreateMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"records"},"value":{"kind":"Variable","name":{"kind":"Name","value":"snapshots"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdCount"}}]}}]}}]} as unknown as DocumentNode<SnapshotCreateManyMutation, SnapshotCreateManyMutationVariables>;
export const SnapshotClearHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SnapshotClearHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshotClearHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"end"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}]}}]} as unknown as DocumentNode<SnapshotClearHistoryMutation, SnapshotClearHistoryMutationVariables>;
export const SongByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SongInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SongInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Song"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artists"}},{"kind":"Field","name":{"kind":"Name","value":"albumUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}}]}}]} as unknown as DocumentNode<SongByIdQuery, SongByIdQueryVariables>;
export const SongCreateOrUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SongCreateOrUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spotifyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uri"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artists"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"albumUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"previewUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songCreateOrUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"spotifyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spotifyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"uri"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uri"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"artists"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artists"}}},{"kind":"Argument","name":{"kind":"Name","value":"albumUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"albumUrl"}}},{"kind":"Argument","name":{"kind":"Name","value":"previewUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"previewUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<SongCreateOrUpdateMutation, SongCreateOrUpdateMutationVariables>;
export const SongFetchRecentlyPlayedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongFetchRecentlyPlayed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songFetchRecentlyPlayed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artists"}},{"kind":"Field","name":{"kind":"Name","value":"albumUrl"}},{"kind":"Field","name":{"kind":"Name","value":"previewUrl"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<SongFetchRecentlyPlayedQuery, SongFetchRecentlyPlayedQueryVariables>;
export const SongCreatePlaylistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SongCreatePlaylist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songCreatePlaylist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"songIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}}]} as unknown as DocumentNode<SongCreatePlaylistMutation, SongCreatePlaylistMutationVariables>;
export const FetchUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]} as unknown as DocumentNode<FetchUserPreferencesQuery, FetchUserPreferencesQueryVariables>;
export const UpdateUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>;
export const UpdateUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]} as unknown as DocumentNode<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const UserFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserFriendsQuery, UserFriendsQueryVariables>;
export const FetchUserMoreResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserMoreResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMoreResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserMoreResultsQuery, FetchUserMoreResultsQueryVariables>;
export const UserDeleteFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeleteFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeleteFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UserDeleteFriendMutation, UserDeleteFriendMutationVariables>;
export const FetchUserPendingRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPendingRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPendingRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserPendingRequestsQuery, FetchUserPendingRequestsQueryVariables>;
export const FetchUserSentRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserSentRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSentRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserSentRequestsQuery, FetchUserSentRequestsQueryVariables>;
export const UserSendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UserSendRequestMutation, UserSendRequestMutationVariables>;
export const UserAcceptRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAcceptRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAcceptRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UserAcceptRequestMutation, UserAcceptRequestMutationVariables>;
export const UserCancelRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserCancelRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCancelRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UserCancelRequestMutation, UserCancelRequestMutationVariables>;
export const UserIgnoreRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserIgnoreRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userIgnoreRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UserIgnoreRequestMutation, UserIgnoreRequestMutationVariables>;
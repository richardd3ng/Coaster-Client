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
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: { input: any; output: any; }
};

export type CreateManyLocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  timestamp: Scalars['Float']['input'];
  userId: Scalars['MongoID']['input'];
};

export type CreateManyLocationPayload = {
  __typename?: 'CreateManyLocationPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Location>>;
};

export type CreateManySongInput = {
  albumUrl: Scalars['String']['input'];
  artists: Array<InputMaybe<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  spotifyId: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type CreateManySongPayload = {
  __typename?: 'CreateManySongPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Song>>;
};

export type CreateManyUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName: Scalars['String']['input'];
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
  spotifyId: Scalars['String']['input'];
  trackSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type CreateManyUserPayload = {
  __typename?: 'CreateManyUserPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
};

export type CreateOneLocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  timestamp: Scalars['Float']['input'];
  userId: Scalars['MongoID']['input'];
};

export type CreateOneLocationPayload = {
  __typename?: 'CreateOneLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Location>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneSongInput = {
  albumUrl: Scalars['String']['input'];
  artists: Array<InputMaybe<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  spotifyId: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type CreateOneSongPayload = {
  __typename?: 'CreateOneSongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Song>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName: Scalars['String']['input'];
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
  spotifyId: Scalars['String']['input'];
  trackSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
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

export type FilterCountLocationInput = {
  AND?: InputMaybe<Array<FilterCountLocationInput>>;
  OR?: InputMaybe<Array<FilterCountLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountLocationOperatorsInput = {
  _id?: InputMaybe<FilterCountLocation_IdOperatorsInput>;
};

export type FilterCountLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountSongInput = {
  AND?: InputMaybe<Array<FilterCountSongInput>>;
  OR?: InputMaybe<Array<FilterCountSongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountSongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountSongOperatorsInput = {
  _id?: InputMaybe<FilterCountSong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterCountSongSpotifyIdOperatorsInput>;
};

export type FilterCountSongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterCountSong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountUserInput = {
  AND?: InputMaybe<Array<FilterCountUserInput>>;
  OR?: InputMaybe<Array<FilterCountUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUserOperatorsInput = {
  _id?: InputMaybe<FilterCountUser_IdOperatorsInput>;
};

export type FilterCountUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyLocationInput = {
  AND?: InputMaybe<Array<FilterFindManyLocationInput>>;
  OR?: InputMaybe<Array<FilterFindManyLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLocationOperatorsInput = {
  _id?: InputMaybe<FilterFindManyLocation_IdOperatorsInput>;
};

export type FilterFindManyLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManySongInput = {
  AND?: InputMaybe<Array<FilterFindManySongInput>>;
  OR?: InputMaybe<Array<FilterFindManySongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManySongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySongOperatorsInput = {
  _id?: InputMaybe<FilterFindManySong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterFindManySongSpotifyIdOperatorsInput>;
};

export type FilterFindManySongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindManySong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyUserInput = {
  AND?: InputMaybe<Array<FilterFindManyUserInput>>;
  OR?: InputMaybe<Array<FilterFindManyUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUser_IdOperatorsInput>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneLocationInput = {
  AND?: InputMaybe<Array<FilterFindOneLocationInput>>;
  OR?: InputMaybe<Array<FilterFindOneLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLocationOperatorsInput = {
  _id?: InputMaybe<FilterFindOneLocation_IdOperatorsInput>;
};

export type FilterFindOneLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneSongInput = {
  AND?: InputMaybe<Array<FilterFindOneSongInput>>;
  OR?: InputMaybe<Array<FilterFindOneSongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneSongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSongOperatorsInput = {
  _id?: InputMaybe<FilterFindOneSong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterFindOneSongSpotifyIdOperatorsInput>;
};

export type FilterFindOneSongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterFindOneSong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneUserInput = {
  AND?: InputMaybe<Array<FilterFindOneUserInput>>;
  OR?: InputMaybe<Array<FilterFindOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: InputMaybe<FilterFindOneUser_IdOperatorsInput>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManyLocationInput = {
  AND?: InputMaybe<Array<FilterRemoveManyLocationInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyLocationOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyLocation_IdOperatorsInput>;
};

export type FilterRemoveManyLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManySongInput = {
  AND?: InputMaybe<Array<FilterRemoveManySongInput>>;
  OR?: InputMaybe<Array<FilterRemoveManySongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManySongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManySongOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManySong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterRemoveManySongSpotifyIdOperatorsInput>;
};

export type FilterRemoveManySongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveManySong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManyUserInput = {
  AND?: InputMaybe<Array<FilterRemoveManyUserInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyUserOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyUser_IdOperatorsInput>;
};

export type FilterRemoveManyUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneLocationInput = {
  AND?: InputMaybe<Array<FilterRemoveOneLocationInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneLocationOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneLocation_IdOperatorsInput>;
};

export type FilterRemoveOneLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneSongInput = {
  AND?: InputMaybe<Array<FilterRemoveOneSongInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneSongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneSongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneSongOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneSong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterRemoveOneSongSpotifyIdOperatorsInput>;
};

export type FilterRemoveOneSongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterRemoveOneSong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneUserInput = {
  AND?: InputMaybe<Array<FilterRemoveOneUserInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneUserOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneUser_IdOperatorsInput>;
};

export type FilterRemoveOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManyLocationInput = {
  AND?: InputMaybe<Array<FilterUpdateManyLocationInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyLocationOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyLocation_IdOperatorsInput>;
};

export type FilterUpdateManyLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManySongInput = {
  AND?: InputMaybe<Array<FilterUpdateManySongInput>>;
  OR?: InputMaybe<Array<FilterUpdateManySongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManySongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManySongOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManySong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterUpdateManySongSpotifyIdOperatorsInput>;
};

export type FilterUpdateManySongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateManySong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManyUserInput = {
  AND?: InputMaybe<Array<FilterUpdateManyUserInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyUserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyUser_IdOperatorsInput>;
};

export type FilterUpdateManyUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneLocationInput = {
  AND?: InputMaybe<Array<FilterUpdateOneLocationInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneLocationInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneLocationOperatorsInput>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneLocationOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneLocation_IdOperatorsInput>;
};

export type FilterUpdateOneLocation_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneSongInput = {
  AND?: InputMaybe<Array<FilterUpdateOneSongInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneSongInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneSongOperatorsInput>;
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneSongOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneSong_IdOperatorsInput>;
  spotifyId?: InputMaybe<FilterUpdateOneSongSpotifyIdOperatorsInput>;
};

export type FilterUpdateOneSongSpotifyIdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['RegExpAsString']['input']>;
};

export type FilterUpdateOneSong_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneUserInput = {
  AND?: InputMaybe<Array<FilterUpdateOneUserInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneUserOperatorsInput>;
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

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneUser_IdOperatorsInput>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type Location = {
  __typename?: 'Location';
  _id: Scalars['MongoID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  timestamp: Scalars['Float']['output'];
  userId: Scalars['MongoID']['output'];
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
  locationCreateMany?: Maybe<CreateManyLocationPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  locationCreateOne?: Maybe<CreateOneLocationPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  locationRemoveById?: Maybe<RemoveByIdLocationPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  locationRemoveMany?: Maybe<RemoveManyLocationPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  locationRemoveOne?: Maybe<RemoveOneLocationPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  locationUpdateById?: Maybe<UpdateByIdLocationPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  locationUpdateMany?: Maybe<UpdateManyLocationPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  locationUpdateOne?: Maybe<UpdateOneLocationPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  songCreateMany?: Maybe<CreateManySongPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  songCreateOne?: Maybe<CreateOneSongPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  songRemoveById?: Maybe<RemoveByIdSongPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  songRemoveMany?: Maybe<RemoveManySongPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  songRemoveOne?: Maybe<RemoveOneSongPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  songUpdateById?: Maybe<UpdateByIdSongPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  songUpdateMany?: Maybe<UpdateManySongPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  songUpdateOne?: Maybe<UpdateOneSongPayload>;
  userAcceptRequest?: Maybe<User>;
  userCancelRequest?: Maybe<User>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  userDeleteFriend?: Maybe<User>;
  userIgnoreRequest?: Maybe<User>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  userSendRequest?: Maybe<User>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
};


export type MutationLocationCreateManyArgs = {
  records: Array<CreateManyLocationInput>;
};


export type MutationLocationCreateOneArgs = {
  record: CreateOneLocationInput;
};


export type MutationLocationRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationLocationRemoveManyArgs = {
  filter: FilterRemoveManyLocationInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLocationRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneLocationInput>;
  sort?: InputMaybe<SortRemoveOneLocationInput>;
};


export type MutationLocationUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdLocationInput;
};


export type MutationLocationUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyLocationInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManyLocationInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManyLocationInput>;
};


export type MutationLocationUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneLocationInput>;
  record: UpdateOneLocationInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneLocationInput>;
};


export type MutationSongCreateManyArgs = {
  records: Array<CreateManySongInput>;
};


export type MutationSongCreateOneArgs = {
  record: CreateOneSongInput;
};


export type MutationSongRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationSongRemoveManyArgs = {
  filter: FilterRemoveManySongInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSongRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneSongInput>;
  sort?: InputMaybe<SortRemoveOneSongInput>;
};


export type MutationSongUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdSongInput;
};


export type MutationSongUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManySongInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManySongInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManySongInput>;
};


export type MutationSongUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneSongInput>;
  record: UpdateOneSongInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneSongInput>;
};


export type MutationUserAcceptRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserCancelRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserDeleteFriendArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserIgnoreRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUserRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneUserInput>;
  sort?: InputMaybe<SortRemoveOneUserInput>;
};


export type MutationUserSendRequestArgs = {
  _id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyUserInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManyUserInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManyUserInput>;
};


export type MutationUserUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneUserInput>;
  record: UpdateOneUserInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneUserInput>;
};

export type Query = {
  __typename?: 'Query';
  locationById?: Maybe<Location>;
  locationByIds: Array<Location>;
  locationCount?: Maybe<Scalars['Int']['output']>;
  locationMany: Array<Location>;
  locationOne?: Maybe<Location>;
  songById?: Maybe<Song>;
  songByIds: Array<Song>;
  songCount?: Maybe<Scalars['Int']['output']>;
  songMany: Array<Song>;
  songOne?: Maybe<Song>;
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userCount?: Maybe<Scalars['Int']['output']>;
  userFriends?: Maybe<Array<Maybe<User>>>;
  userMany: Array<User>;
  userMoreResults?: Maybe<Array<Maybe<User>>>;
  userOne?: Maybe<User>;
  userPendingRequests?: Maybe<Array<Maybe<User>>>;
  userSentRequests?: Maybe<Array<Maybe<User>>>;
};


export type QueryLocationByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryLocationByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsLocationInput>;
};


export type QueryLocationCountArgs = {
  filter?: InputMaybe<FilterCountLocationInput>;
};


export type QueryLocationManyArgs = {
  filter?: InputMaybe<FilterFindManyLocationInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyLocationInput>;
};


export type QueryLocationOneArgs = {
  filter?: InputMaybe<FilterFindOneLocationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneLocationInput>;
};


export type QuerySongByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QuerySongByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsSongInput>;
};


export type QuerySongCountArgs = {
  filter?: InputMaybe<FilterCountSongInput>;
};


export type QuerySongManyArgs = {
  filter?: InputMaybe<FilterFindManySongInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManySongInput>;
};


export type QuerySongOneArgs = {
  filter?: InputMaybe<FilterFindOneSongInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneSongInput>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsUserInput>;
};


export type QueryUserCountArgs = {
  filter?: InputMaybe<FilterCountUserInput>;
};


export type QueryUserFriendsArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserManyArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUserInput>;
};


export type QueryUserMoreResultsArgs = {
  _id: Scalars['MongoID']['input'];
  query: Scalars['String']['input'];
};


export type QueryUserOneArgs = {
  filter?: InputMaybe<FilterFindOneUserInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneUserInput>;
};


export type QueryUserPendingRequestsArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserSentRequestsArgs = {
  _id: Scalars['MongoID']['input'];
};

export type RemoveByIdLocationPayload = {
  __typename?: 'RemoveByIdLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Location>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdSongPayload = {
  __typename?: 'RemoveByIdSongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Song>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveManyLocationPayload = {
  __typename?: 'RemoveManyLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveManySongPayload = {
  __typename?: 'RemoveManySongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveOneLocationPayload = {
  __typename?: 'RemoveOneLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Location>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneSongPayload = {
  __typename?: 'RemoveOneSongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Song>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
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

export enum SortFindByIdsLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsSongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneSongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManySongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneLocationInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneSongInput {
  SpotifyidAsc = 'SPOTIFYID_ASC',
  SpotifyidDesc = 'SPOTIFYID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdLocationInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateByIdLocationPayload = {
  __typename?: 'UpdateByIdLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Location>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdSongInput = {
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdSongPayload = {
  __typename?: 'UpdateByIdSongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Song>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

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

export type UpdateManyLocationInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateManyLocationPayload = {
  __typename?: 'UpdateManyLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateManySongInput = {
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManySongPayload = {
  __typename?: 'UpdateManySongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateManyUserInput = {
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

export type UpdateManyUserPayload = {
  __typename?: 'UpdateManyUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateOneLocationInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['MongoID']['input']>;
};

export type UpdateOneLocationPayload = {
  __typename?: 'UpdateOneLocationPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Location>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneSongInput = {
  albumUrl?: InputMaybe<Scalars['String']['input']>;
  artists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  spotifyId?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneSongPayload = {
  __typename?: 'UpdateOneSongPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Song>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneUserInput = {
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

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
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

export type LocationCreateManyMutationVariables = Exact<{
  locations: Array<CreateManyLocationInput> | CreateManyLocationInput;
}>;


export type LocationCreateManyMutation = { __typename?: 'Mutation', locationCreateMany?: { __typename?: 'CreateManyLocationPayload', records?: Array<{ __typename?: 'Location', userId: any, latitude: number, longitude: number, timestamp: number }> | null } | null };

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


export type FetchUserPreferencesQuery = { __typename?: 'Query', userById?: { __typename?: 'User', trackSnapshots?: boolean | null, shareSnapshots?: boolean | null } | null };

export type UpdateUserPreferencesMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  shareSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
  trackSnapshots?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateUserPreferencesMutation = { __typename?: 'Mutation', userUpdateById?: { __typename?: 'UpdateByIdUserPayload', record?: { __typename?: 'User', trackSnapshots?: boolean | null, shareSnapshots?: boolean | null } | null } | null };

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
export const LocationCreateManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LocationCreateMany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateManyLocationInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationCreateMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"records"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locations"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<LocationCreateManyMutation, LocationCreateManyMutationVariables>;
export const FetchUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserInfoQuery, FetchUserInfoQueryVariables>;
export const FetchUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackSnapshots"}},{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]} as unknown as DocumentNode<FetchUserPreferencesQuery, FetchUserPreferencesQueryVariables>;
export const UpdateUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shareSnapshots"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackSnapshots"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shareSnapshots"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shareSnapshots"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"trackSnapshots"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackSnapshots"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackSnapshots"}},{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>;
export const FetchUserFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserFriendsQuery, FetchUserFriendsQueryVariables>;
export const FetchUserMoreResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserMoreResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMoreResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserMoreResultsQuery, FetchUserMoreResultsQueryVariables>;
export const UserDeleteFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeleteFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeleteFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserDeleteFriendMutation, UserDeleteFriendMutationVariables>;
export const FetchUserPendingRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPendingRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPendingRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserPendingRequestsQuery, FetchUserPendingRequestsQueryVariables>;
export const FetchUserSentRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserSentRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSentRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<FetchUserSentRequestsQuery, FetchUserSentRequestsQueryVariables>;
export const UserSendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserSendRequestMutation, UserSendRequestMutationVariables>;
export const UserAcceptRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAcceptRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAcceptRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserAcceptRequestMutation, UserAcceptRequestMutationVariables>;
export const UserCancelRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserCancelRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCancelRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserCancelRequestMutation, UserCancelRequestMutationVariables>;
export const UserIgnoreRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserIgnoreRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userIgnoreRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]} as unknown as DocumentNode<UserIgnoreRequestMutation, UserIgnoreRequestMutationVariables>;
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

export type CreateManyUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName: Scalars['String']['input'];
  encryptedAccessToken?: InputMaybe<Scalars['String']['input']>;
  encryptedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  jamSessions?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  locationAccuracy?: InputMaybe<Scalars['Float']['input']>;
  pendingRequests?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  profileUri?: InputMaybe<Scalars['String']['input']>;
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

export type CreateOneUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName: Scalars['String']['input'];
  encryptedAccessToken?: InputMaybe<Scalars['String']['input']>;
  encryptedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  jamSessions?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  locationAccuracy?: InputMaybe<Scalars['Float']['input']>;
  pendingRequests?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  userAcceptPendingRequest?: Maybe<User>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  userDeleteFriend?: Maybe<User>;
  userIgnorePendingRequest?: Maybe<User>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
};


export type MutationUserAcceptPendingRequestArgs = {
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


export type MutationUserIgnorePendingRequestArgs = {
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

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userConnection?: Maybe<UserConnection>;
  userCount?: Maybe<Scalars['Int']['output']>;
  userFriends?: Maybe<Array<Maybe<User>>>;
  userMany: Array<User>;
  userMoreResults?: Maybe<Array<Maybe<User>>>;
  userOne?: Maybe<User>;
  userPagination?: Maybe<UserPagination>;
  userPendingRequests?: Maybe<Array<Maybe<User>>>;
  userSentRequests?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsUserInput>;
};


export type QueryUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionUserEnum>;
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


export type QueryUserPaginationArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUserInput>;
};


export type QueryUserPendingRequestsArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryUserSentRequestsArgs = {
  _id: Scalars['MongoID']['input'];
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

export type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
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

export enum SortConnectionUserEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneUserInput {
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
  profileUri?: InputMaybe<Scalars['String']['input']>;
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

export type UpdateManyUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  encryptedAccessToken?: InputMaybe<Scalars['String']['input']>;
  encryptedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  jamSessions?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  locationAccuracy?: InputMaybe<Scalars['Float']['input']>;
  pendingRequests?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  profileUri?: InputMaybe<Scalars['String']['input']>;
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

export type UpdateOneUserInput = {
  dataPersistence?: InputMaybe<EnumUserDataPersistence>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  encryptedAccessToken?: InputMaybe<Scalars['String']['input']>;
  encryptedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  jamSessions?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  locationAccuracy?: InputMaybe<Scalars['Float']['input']>;
  pendingRequests?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  profileUri?: InputMaybe<Scalars['String']['input']>;
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
  profileUri?: Maybe<Scalars['String']['output']>;
  sentRequests?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  shareSnapshots?: Maybe<Scalars['Boolean']['output']>;
  snapshots?: Maybe<Array<Maybe<Scalars['MongoID']['output']>>>;
  spotifyId: Scalars['String']['output'];
  trackSnapshots?: Maybe<Scalars['Boolean']['output']>;
  username: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: User;
};

/** List of items with pagination. */
export type UserPagination = {
  __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
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

export type UserInfoFragment = { __typename?: 'User', _id: any, username: string, displayName: string, profileUri?: string | null } & { ' $fragmentName'?: 'UserInfoFragment' };

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

export type UserAcceptPendingRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserAcceptPendingRequestMutation = { __typename?: 'Mutation', userAcceptPendingRequest?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export type UserIgnorePendingRequestMutationVariables = Exact<{
  id: Scalars['MongoID']['input'];
  friendId: Scalars['MongoID']['input'];
}>;


export type UserIgnorePendingRequestMutation = { __typename?: 'Mutation', userIgnorePendingRequest?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserInfoFragment': UserInfoFragment } }
  ) | null };

export const UserInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<UserInfoFragment, unknown>;
export const FetchUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<FetchUserInfoQuery, FetchUserInfoQueryVariables>;
export const FetchUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackSnapshots"}},{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]} as unknown as DocumentNode<FetchUserPreferencesQuery, FetchUserPreferencesQueryVariables>;
export const UpdateUserPreferencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPreferences"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shareSnapshots"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackSnapshots"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shareSnapshots"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shareSnapshots"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"trackSnapshots"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackSnapshots"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackSnapshots"}},{"kind":"Field","name":{"kind":"Name","value":"shareSnapshots"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserPreferencesMutation, UpdateUserPreferencesMutationVariables>;
export const FetchUserFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserFriends"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userFriends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<FetchUserFriendsQuery, FetchUserFriendsQueryVariables>;
export const FetchUserMoreResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserMoreResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userMoreResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<FetchUserMoreResultsQuery, FetchUserMoreResultsQueryVariables>;
export const UserDeleteFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeleteFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeleteFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<UserDeleteFriendMutation, UserDeleteFriendMutationVariables>;
export const FetchUserPendingRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserPendingRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPendingRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<FetchUserPendingRequestsQuery, FetchUserPendingRequestsQueryVariables>;
export const FetchUserSentRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserSentRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSentRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<FetchUserSentRequestsQuery, FetchUserSentRequestsQueryVariables>;
export const UserAcceptPendingRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAcceptPendingRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAcceptPendingRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<UserAcceptPendingRequestMutation, UserAcceptPendingRequestMutationVariables>;
export const UserIgnorePendingRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserIgnorePendingRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userIgnorePendingRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"friendId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"profileUri"}}]}}]} as unknown as DocumentNode<UserIgnorePendingRequestMutation, UserIgnorePendingRequestMutationVariables>;
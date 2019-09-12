export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  createPost?: Maybe<Post>,
  updatePost?: Maybe<Post>,
};


export type MutationCreatePostArgs = {
  item?: Maybe<PostCreateInput>
};


export type MutationUpdatePostArgs = {
  item?: Maybe<PostUpdateInput>
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String'],
  createdAt: Scalars['String'],
};

export type PostCollection = {
   __typename?: 'PostCollection',
  items?: Maybe<Array<Maybe<Post>>>,
};

export type PostCreateInput = {
  title: Scalars['String'],
  content: Scalars['String'],
};

export type PostUpdateInput = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  getPost?: Maybe<Post>,
  listPosts?: Maybe<PostCollection>,
};


export type QueryGetPostArgs = {
  id: Scalars['ID']
};

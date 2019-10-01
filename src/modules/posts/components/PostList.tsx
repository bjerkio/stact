import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { PostCollection } from '../../../generated/graphql';

type Props = { posts: PostCollection };

const PostList: React.FC<Props> = ({ posts }: Props) => (
  <>
    {posts.items &&
      posts.items.map(post => post && <Post key={post.id} {...post} />)}
  </>
);

export default connect(
  (state: { posts: { posts: PostCollection } }) => ({
    posts: state.posts.posts,
  }),
  {},
)(PostList);

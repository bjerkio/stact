import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import actions from '../store/Reducer';
import Post from './Post';

const PostList: React.FC = () => {
  const posts = useSelector((state: any) => state.posts, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPosts());
  }, [dispatch]);

  return (
    <>
      {posts.items &&
        posts.items.map((post: any) => <Post key={post.id} {...post} />)}
    </>
  );
};

export default PostList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import actions, { Post as PostType } from '../store/Reducer';
import Post from './Post';
import { RootState } from '../../../store/reducers';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPosts());
  }, [dispatch]);

  return (
    <section>
      {posts.items &&
        posts.items.map((post: PostType) => <Post key={post.id} {...post} />)}
    </section>
  );
};

export default PostList;

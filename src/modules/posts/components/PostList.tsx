import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import actions from '../store/Reducer';
import Post from './Post';
import { RootState } from '../../../store/reducers';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPostsRequest());
  }, [dispatch]);

  return (
    <section>
      {posts.items && posts.items.map(post => <Post key={post.id} {...post} />)}
    </section>
  );
};

export default PostList;

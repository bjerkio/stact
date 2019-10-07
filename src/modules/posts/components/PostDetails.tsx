import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Post from './Post';
import { RootState } from '../../../root/store/reducers';
import actions, { Post as PostType } from '../store/Reducer';

const PostDetails: React.FC = () => {
  const { postId } = useParams();
  const posts = useSelector((state: RootState) => state.posts, shallowEqual);
  const dispatch = useDispatch();
  const postDetails = useMemo(
    () =>
      posts &&
      posts.items &&
      posts.items.find((post: PostType) => post.id === Number(postId)),
    [posts, postId],
  );

  if (!postId) throw new Error('postId missing');
  if (!postDetails) {
    dispatch(actions.fetchPostRequest(Number(postId)));
    return <div>loading...</div>;
  }

  // TODO: some kind of error state
  // return (
  //   <Redirect
  //     to={{
  //       pathname: '/404',
  //       state: { from: location },
  //     }}
  //   />
  // );

  return <Post {...postDetails} />;
};

export default PostDetails;

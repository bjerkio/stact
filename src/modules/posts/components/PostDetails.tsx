import React from 'react';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Post from './Post';

const PostDetails: React.FC = () => {
  const { postId } = useParams();
  const posts = useSelector((state: any) => state.posts, shallowEqual);
  const location = useLocation();
  const postDetails =
    posts &&
    posts.items &&
    posts.items.find((post: any) => post.id === Number(postId));

  // TODO: Will not work if the post list has not been fetched and it's a direct link. Requires more logic.
  if (!postDetails)
    return (
      <Redirect
        to={{
          pathname: '/404',
          state: { from: location },
        }}
      />
    );

  return <Post {...postDetails} />;
};

export default PostDetails;

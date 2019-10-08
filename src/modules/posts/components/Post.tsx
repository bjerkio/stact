import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post as PostProps } from '../store/Reducer';

const Post: FC<PostProps> = ({
  title,
  body,
  id,
  userId: _userId,
  ...rest
}: PostProps) => (
  <article data-testid="post" {...rest}>
    <h1>
      <Link to={`/posts/${id}`} data-testid="post-title">{title}</Link>
    </h1>
    <p>{body}</p>
  </article>
);

export default Post;

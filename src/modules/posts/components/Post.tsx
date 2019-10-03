import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post as PostProps } from '../store/Reducer';

const Post: FC<PostProps> = ({ title, body, id }: PostProps) => (
  <article data-testid="post">
    <h1>
      <Link to={`/posts/${id}`}>{title}</Link>
    </h1>
    <p>{body}</p>
  </article>
);

export default Post;

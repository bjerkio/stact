import React, { FC } from 'react';
import { Post as PostProps } from '../store/Reducer';

const Post: FC<PostProps> = ({ title, body }: PostProps) => (
  <article>
    <h1>{title}</h1>
    <p>{body}</p>
  </article>
);

export default Post;

import React, { FC } from 'react';
import { Post as PostProps } from '../../../generated/graphql';

const Post: FC<PostProps> = ({ title, content, createdAt }: PostProps) => (
  <article>
    <h1>{title}</h1>
    <b>{`Created at ${createdAt}`}</b>
    <p>{content}</p>
  </article>
);

export default Post;

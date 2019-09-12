import React from 'react';
import { Post } from '../../../generated/graphql';

export default ({ title, content, createdAt }: Post) => (
  <article>
    <h1>{title}</h1>
    <b>Created at {createdAt}</b>
    <p>
      {content}
    </p>
  </article>
);

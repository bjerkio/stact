import { createStandardAction } from 'typesafe-actions';
import { Post } from '../../../generated/graphql';

export const fetchPosts = createStandardAction('fetch-posts')<void>();
export const fetchPostsFulfilled = createStandardAction('fetch-posts-fulfilled')<Post[]>();

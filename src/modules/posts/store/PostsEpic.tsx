import { mergeMap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { fetchPosts, fetchPostsFulfilled } from './PostsActions';
import { Post } from '../../../generated/graphql';

// eslint-disable-next-line import/prefer-default-export
export const fetchPostsEpic: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(fetchPosts)),
    mergeMap(() =>
      ajax
        .getJSON<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
        .pipe(map(fetchPostsFulfilled)),
    ),
  );

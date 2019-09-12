import { mergeMap, map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { isActionOf } from 'typesafe-actions';
import { fetchPosts, fetchPostsFulfilled } from './PostsActions';
import { Epic } from 'redux-observable';
import { Post } from '../../../generated/graphql';

export const fetchPostsEpic: Epic = action$ => action$.pipe(
  filter(isActionOf(fetchPosts)),
  mergeMap(() => ajax.getJSON<Post[]>(`https://jsonplaceholder.typicode.com/posts`).pipe(
    map(fetchPostsFulfilled)
  ))
)

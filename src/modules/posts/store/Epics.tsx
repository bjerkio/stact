import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Epic } from 'redux-observable';
import actions, { Post } from './Reducer';

const fetchPostsRequestActionTypeName = actions.fetchPostsRequest.type;
const fetchPostRequestActionTypeName = actions.fetchPostRequest.type;

// eslint-disable-next-line import/prefer-default-export
export const fetchPostsEpic: Epic = action$ =>
  action$
    .ofType(fetchPostsRequestActionTypeName)
    .pipe(
      mergeMap(() =>
        ajax
          .getJSON<Post[]>('https://jsonplaceholder.typicode.com/posts')
          .pipe(map(actions.fetchPostsFulfilled)),
      ),
    );

export const fetchPostEpic: Epic = action$ =>
  action$
    .ofType(fetchPostRequestActionTypeName)
    .pipe(
      mergeMap(action =>
        ajax
          .getJSON<Post>(
            `https://jsonplaceholder.typicode.com/posts/${action.payload}`,
          )
          .pipe(map(actions.fetchPostFulfilled)),
      ),
    );

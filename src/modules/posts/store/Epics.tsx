import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Epic } from 'redux-observable';
import actions, { Post } from './Reducer';

const fetchPostsActionTypeName = actions.fetchPosts.type;
// const updatePostsActionTypeName = actions.updatePosts.type;
// type updatePostsAction = ReturnType<typeof actions.updatePosts>
// type fetchPostsAction = ReturnType<typeof actions.fetchPosts>;

// eslint-disable-next-line import/prefer-default-export
export const fetchPostsEpic: Epic = action$ =>
  action$
    .ofType(fetchPostsActionTypeName)
    .pipe(
      mergeMap(() =>
        ajax
          .getJSON<Post[]>('https://jsonplaceholder.typicode.com/posts')
          .pipe(map(actions.fetchPostsFulfilled)),
      ),
    );

import {map} from 'rxjs/operators';
import {ActionCreators} from './Actions'
import {Epic} from 'redux-observable';

// Get the action name to subscribe to
const setTitleActionTypeName = ActionCreators.setTitle.type;

// Get the action type to have a type safe Epic
type setTitleAction = ReturnType<typeof ActionCreators.setTitle>;


const setTitleEpic: Epic<setTitleAction> = action$ =>
  action$
    .ofType(setTitleActionTypeName)
    .pipe(
      map((action: { payload: { toUpperCase: () => void; }; }) => action.payload.toUpperCase()),
    );


/* import { mergeMap, map, filter } from 'rxjs/operators';
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
 */
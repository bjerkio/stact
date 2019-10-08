import { map, mergeMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import actions, { User } from './Reducer';

const fetchUsersRequestActionTypeName = actions.fetchUsersRequest.type;
const fetchUserRequestActionTypeName = actions.fetchUserRequest.type;

// eslint-disable-next-line import/prefer-default-export
export const fetchUsersEpic: Epic = action$ =>
  action$
    .ofType(fetchUsersRequestActionTypeName)
    .pipe(
      mergeMap(() =>
        ajax
          .getJSON<User[]>('https://jsonplaceholder.typicode.com/users')
          .pipe(
            map(actions.fetchUsersFulfilled),
            catchError(error => of(actions.fetchUsersError(error))
          ),
        ),
      ),
    );

export const fetchUserEpic: Epic = action$ =>
  action$
    .ofType(fetchUserRequestActionTypeName)
    .pipe(
      mergeMap(action =>
        ajax
          .getJSON<User>(
            `https://jsonplaceholder.typicode.com/users/${action.payload}`,
          )
          .pipe(
            map(actions.fetchUserFulfilled),
            catchError(error => of(actions.fetchUserError(error))
            ),
          )
      ),
    );

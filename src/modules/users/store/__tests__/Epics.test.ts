import { ActionsObservable, StateObservable } from 'redux-observable';
import { of, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fetchUserEpic, fetchUsersEpic } from '../Epics';
import actions from '../Reducer';
import randomUser, { randomUsers } from '../__fixtures__/randomUser';

describe('User Epics', () => {
  describe('Users', () => {
    test('send correct action on success', done => {
      const state$ = new StateObservable(new Subject(), {});
      const response = randomUsers();
      jest.spyOn(ajax, 'getJSON').mockImplementationOnce(() => of(response));

      const expected = actions.fetchUsersFulfilled(response);

      const action$ = ActionsObservable.of(actions.fetchUsersRequest());

      fetchUsersEpic(action$, state$, undefined).subscribe(actual => {
        expect(actual).toEqual(expected);
        done();
      });
    });
  });

  describe('User', () => {
    test('send correct action on success', done => {
      const state$ = new StateObservable(new Subject(), {});
      const response = randomUser();
      jest.spyOn(ajax, 'getJSON').mockImplementationOnce(() => of(response));

      const expected = actions.fetchUserFulfilled(response);

      const action$ = ActionsObservable.of(
        actions.fetchUserRequest(response.id),
      );

      fetchUserEpic(action$, state$, undefined).subscribe(actual => {
        expect(actual).toEqual(expected);
        done();
      });
    });
  });
});

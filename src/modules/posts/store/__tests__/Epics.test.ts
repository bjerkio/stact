import { ActionsObservable, StateObservable } from 'redux-observable';
import { of, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fetchPostsEpic, fetchPostEpic } from '../Epics';
import actions from '../Reducer'
import randomPost, { randomPosts } from '../__fixtures__/randomPost';

describe('Post Epics', () => {
  describe("Posts", () => {
    test('send correct action on success', (done) => {
      const state$ = new StateObservable(new Subject(), {});
      const response = randomPosts()
      jest.spyOn(ajax, 'getJSON').mockImplementationOnce(() => of(response));
      
      const expected = actions.fetchPostsFulfilled(response)

      const action$ = ActionsObservable.of(actions.fetchPostsRequest());

      fetchPostsEpic(action$, state$, undefined).subscribe((actual) => {
        expect(actual).toEqual(expected);
        done();
      });
    });
  })

  describe('Post', () => {
    test('send correct action on success', done => {
      const state$ = new StateObservable(new Subject(), {});
      const response = randomPost()
      jest.spyOn(ajax, 'getJSON').mockImplementationOnce(() => of(response));

      const expected = actions.fetchPostFulfilled(response);

      const action$ = ActionsObservable.of(actions.fetchPostRequest(response.id));

      fetchPostEpic(action$, state$, undefined).subscribe(actual => {
        expect(actual).toEqual(expected);
        done();
      });
    });
  });
});

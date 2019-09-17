/// <reference path="../../../store/types.d.ts" />
import { getType } from 'typesafe-actions';
import { createReducer } from 'typesafe-actions';
import { fetchPostsFulfilled } from './PostsActions';
import { combineReducers } from 'redux';


const initialState: any = {
  posts: {
    items: [],
  },
};

const posts = createReducer(initialState.posts.items).handleAction(
  getType(fetchPostsFulfilled),
  (state, action) => [...state, action.payload],
);

export default combineReducers({
  posts,
});
// export default (state = initialState, action: ActionType) => {
//   return state;
// };

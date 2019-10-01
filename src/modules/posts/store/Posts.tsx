import { combineReducers } from 'redux';
import { createReducer, getType } from 'typesafe-actions';
import { fetchPostsFulfilled } from './PostsActions';
import '../../../store/types.d';

// eslint-disable-next-line
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

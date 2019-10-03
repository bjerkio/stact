import { combineReducers } from 'redux';
import { PostsReducerFunction } from '../modules/posts/store/Reducer';
import { UsersReducerFunction } from '../modules/users/store/Reducer';

const reducers = combineReducers({
  posts: PostsReducerFunction,
  users: UsersReducerFunction,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;

import { combineReducers } from 'redux';
import { PostsReducerFunction } from '../modules/posts/store/Reducer';

const reducers = combineReducers({
  posts: PostsReducerFunction,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;

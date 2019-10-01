import { combineReducers } from 'redux';
import { PostsReducerFunction } from '../modules/posts/store/Reducer';

export default combineReducers({
  posts: PostsReducerFunction,
});

import { combineEpics } from 'redux-observable';
import * as PostsEpics from '../modules/posts/store/Epics';
import * as UsersEpics from '../modules/users/store/Epics';

export default combineEpics(
  ...Object.values(PostsEpics),
  ...Object.values(UsersEpics),
);

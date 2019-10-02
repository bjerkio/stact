import { combineEpics } from 'redux-observable';
import * as PostsEpics from '../modules/posts/store/Epics';

export default combineEpics(...Object.values(PostsEpics));

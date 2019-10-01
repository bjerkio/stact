import { combineEpics } from 'redux-observable';
import { fetchPostsEpic } from '../modules/posts/store/Epics';

export default combineEpics(fetchPostsEpic);

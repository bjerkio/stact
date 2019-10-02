import { combineEpics } from 'redux-observable';
import { fetchPostsEpic, fetchPostEpic } from '../modules/posts/store/Epics';

export default combineEpics(fetchPostsEpic, fetchPostEpic);

import {createActionCreators} from "immer-reducer";
import {MyImmerReducer} from './ImmerReducer'

export const ActionCreators = createActionCreators(MyImmerReducer);

export const action = ActionCreators.setTitle("Title");
action.payload; 


/* import { createStandardAction } from 'typesafe-actions';
import { Post } from '../../../generated/graphql';

export const fetchPosts = createStandardAction('fetch-posts')<void>();
export const fetchPostsFulfilled = createStandardAction('fetch-posts-fulfilled')<Post[]>();
 */
import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsState {
  items: Post[];
}

const initialState: PostsState = {
  items: [],
};

export class PostsReducer extends ImmerReducer<PostsState> {
  // eslint-disable-next-line
  fetchPosts(): void {}

  fetchPostsFulfilled(payload: Post[]): void {
    this.draftState.items = payload;
  }
}

export default createActionCreators(PostsReducer);
export const PostsReducerFunction = createReducerFunction(
  PostsReducer,
  initialState,
);

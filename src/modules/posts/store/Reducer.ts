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
  fetchPostsRequest(): void {}

  fetchPostsFulfilled(payload: Post[]): void {
    this.draftState.items = payload;
  }

  // eslint-disable-next-line
  fetchPostRequest(_postId: number): void {}

  fetchPostFulfilled(payload: Post): void {
    let postExists = this.draftState.items.find(post => post.id === payload.id);
    if (postExists) postExists = payload;
    else this.draftState.items.push(payload);
  }
}

export default createActionCreators(PostsReducer);
export const PostsReducerFunction = createReducerFunction(
  PostsReducer,
  initialState,
);

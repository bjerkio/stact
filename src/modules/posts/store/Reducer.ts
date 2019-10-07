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
  errors: {
    [key: string]: string
  }
}

const initialState: PostsState = {
  items: [],
  errors: {}
};

export class PostsReducer extends ImmerReducer<PostsState> {
  // eslint-disable-next-line
  fetchPostsRequest(): void {}

  // eslint-disable-next-line
  fetchPostsError(payload: string): void {
    this.draftState.errors.fetchPostsError = payload;
   }

  fetchPostsFulfilled(payload: Post[]): void {
    this.draftState.items = payload;
    delete this.draftState.errors.fetchPostsError
  }

  // eslint-disable-next-line
  fetchPostRequest(_payload: number): void {}

  // eslint-disable-next-line
  fetchPostError(payload: string): void { 
    this.draftState.errors.fetchPostError = payload;
  }

  fetchPostFulfilled(payload: Post): void {
    let postExists = this.draftState.items.find(post => post.id === payload.id);
    if (postExists) postExists = payload;
    else this.draftState.items.push(payload);
    delete this.draftState.errors.fetchPostError
  }
}

export default createActionCreators(PostsReducer);
export const PostsReducerFunction = createReducerFunction(
  PostsReducer,
  initialState,
);

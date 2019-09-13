import {createReducerFunction} from "immer-reducer";
import {ImmerReducer} from "immer-reducer";

/*
 * Maybe not this? 👇 
 */
type State = {
  post: {
    title: string;
    content: string;
  }
};
 
const initialState: State = {
    post: {
        title: "",
        content: "",
    },
}; 


 export class MyImmerReducer extends ImmerReducer<State> {
    setTitle(title: string) {
        this.draftState.post.title = title;
    }

    setContent(content: string) {
        this.draftState.post.content = content;
    }
}


export const reducerFunction = createReducerFunction(MyImmerReducer, initialState);

/* 
const store = createStore(reducerFunction); */

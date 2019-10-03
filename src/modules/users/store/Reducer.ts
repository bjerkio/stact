import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UsersState {
  items: User[];
}

const initialState: UsersState = {
  items: [],
};

export class UsersReducer extends ImmerReducer<UsersState> {
  // eslint-disable-next-line
  fetchUsersRequest(): void {}

  fetchUsersFulfilled(payload: User[]): void {
    this.draftState.items = payload;
  }

  // eslint-disable-next-line
  fetchUserRequest(_userId: number): void {}

  fetchUserFulfilled(payload: User): void {
    let userExists = this.draftState.items.find(user => user.id === payload.id);
    if (userExists) userExists = payload;
    else this.draftState.items.push(payload);
  }
}

export default createActionCreators(UsersReducer);
export const UsersReducerFunction = createReducerFunction(
  UsersReducer,
  initialState,
);

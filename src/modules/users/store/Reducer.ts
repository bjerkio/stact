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
  errors: {
    [key: string]: string
  }
}

const initialState: UsersState = {
  items: [],
  errors: {}
};

export class UsersReducer extends ImmerReducer<UsersState> {
  // eslint-disable-next-line
  fetchUsersRequest(): void {}

  // eslint-disable-next-line
  fetchUsersError(payload: string): void {
    this.draftState.errors.fetchUsersError = payload;
   }

  fetchUsersFulfilled(payload: User[]): void {
    this.draftState.items = payload;
    delete this.draftState.errors.fetchUsersError
  }

  // eslint-disable-next-line
  fetchUserRequest(_userId: number): void {}

  // eslint-disable-next-line
  fetchUserError(payload: string): void { 
    this.draftState.errors.fetchUserError = payload
  }

  fetchUserFulfilled(payload: User): void {
    let userExists = this.draftState.items.find(user => user.id === payload.id);
    if (userExists) userExists = payload;
    else this.draftState.items.push(payload);
    delete this.draftState.errors.fetchUserError
  }
}

export default createActionCreators(UsersReducer);
export const UsersReducerFunction = createReducerFunction(
  UsersReducer,
  initialState,
);

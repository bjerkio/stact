import {createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers';
import epics from './epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(epics);

  return store;
}


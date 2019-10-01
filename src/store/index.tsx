import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default function configureStore(): Store {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );

  epicMiddleware.run(epics);

  return store;
}

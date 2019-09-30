import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';
import defaultStore from '../../../store';

/**
 * Wraps a component in a Redux provider with a store
 * @param store
 */
const withStore = (store = defaultStore) => (
  Component: ComponentType,
) => () => (
  <Provider store={store()}>
    <Component />
  </Provider>
);

export default withStore;

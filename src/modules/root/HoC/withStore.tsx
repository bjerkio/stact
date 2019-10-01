import React, { ComponentType, FC } from 'react';
import { Provider } from 'react-redux';
import defaultStore from '../../../store';

/**
 * Wraps a component in a Redux provider with a store
 * @param store
 */
const withStore = (store = defaultStore) => (
  Component: ComponentType,
): FC => (): JSX.Element => (
  <Provider store={store()}>
    <Component />
  </Provider>
);

export default withStore;

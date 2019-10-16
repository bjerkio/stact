import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './modules/root/App';
import * as serviceWorker from './serviceWorker';
import withStore from './modules/root/HoC/withStore';
import client from './apollo';

const AppWithStore = withStore()(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <AppWithStore />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

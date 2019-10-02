import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostRoutes from '../posts/Routes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/">
      <PostRoutes />
    </Route>
  </Switch>
);

export default Routes;

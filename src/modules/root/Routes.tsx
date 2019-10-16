import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostRoutes from '../posts/Routes';
import UsersRoutes from '../users/Routes';
import CountriesRoutes from '../countries/Routes';
import NotFound from './components/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/posts">
      <PostRoutes baseLocation="/posts" />
    </Route>
    <Route path="/users">
      <UsersRoutes baseLocation="/users" />
    </Route>
    <Route path="/countries">
      <CountriesRoutes baseLocation="/countries" />
    </Route>
    <Route exact path="/404">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;

import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import RouteProps from '../../root/interfaces/RouteProps';

const UsersRoutes: React.FC<RouteProps> = ({ baseLocation }: RouteProps) => {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path={baseLocation}>
        <UserList />
      </Route>
      <Route exact path={`${baseLocation}/:userId`}>
        <UserDetails />
      </Route>
      <Route>
        <Redirect
          to={{
            pathname: '/404',
            state: { from: location },
          }}
        />
      </Route>
    </Switch>
  );
};

export default UsersRoutes
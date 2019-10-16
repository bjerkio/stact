import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import CountryList from './components/CountryList';
import Country from './components/Country';
import RouteProps from '../root/interfaces/RouteProps';

const CountryRoutes: React.FC<RouteProps> = ({ baseLocation }: RouteProps) => {
  const location = useLocation();

  return (
    <Switch>
      <Route exact path={baseLocation}>
        <CountryList />
      </Route>
      <Route exact path={`${baseLocation}/:code`}>
        <Country />
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

export default CountryRoutes;

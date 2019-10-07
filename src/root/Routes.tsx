import React from 'react';
import { Route, Switch } from 'react-router-dom';
import modules from '../modules';
import NotFound from './components/NotFound';
import Module from './interfaces/Module';

const Routes: React.FC = () => (
  <Switch>
    {modules.map((module: Module) => (
      <Route path={module.basePath} key={module.name}>
        <module.routes baseLocation={module.basePath} />
      </Route>
    ))}
    <Route exact path="/404">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;

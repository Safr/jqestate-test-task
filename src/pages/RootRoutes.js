import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// COMPONENTS
import { MainRoute } from 'components/Layout/RouteTemplates';
import { NotFound, Main } from './routes';

// EXPORTED ROUTES
const Routes = () => (
  <Switch>
    <MainRoute exact path="/" component={Main} />
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;

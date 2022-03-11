import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Login, Registration } from '../../../pages';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;

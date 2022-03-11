import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Candidates, Home, Login, Registration } from '../../../pages';
import PrivateRoute from '../privateRoute/privateRoute';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <PrivateRoute path="/candidates" exact component={Candidates} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;

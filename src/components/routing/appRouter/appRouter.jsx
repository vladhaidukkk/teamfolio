import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Candidates, Home, Login, Registration } from '../../../pages';
import Favourites from '../../../pages/favoutires/favourites';
import Members from '../../../pages/members/members';
import PrivateRoute from '../privateRoute/privateRoute';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/members" exact component={Members} />
      <Route path="/favourites" exact component={Favourites} />
      <PrivateRoute path="/candidates" exact component={Candidates} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Candidates,
  EditResume,
  Home,
  Login,
  Logout,
  Registration,
  Resume,
  Team,
  User,
} from '../../../pages';
import Account from '../../../pages/account/account';
import Favourites from '../../../pages/favoutires/favourites';
import PrivateRoute from '../privateRoute/privateRoute';

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/team" exact component={Team} />
        <PrivateRoute path="/favourites" exact component={Favourites} />
        <Route path="/logout" exact component={Logout} />
        <PrivateRoute path="/resume" exact component={Resume} />
        <PrivateRoute path="/account" exact component={Account} />
        <PrivateRoute path="/editresume" exact component={EditResume} />
        <Route path="/users/:userId" exact component={User} />
        <PrivateRoute path="/candidates" exact component={Candidates} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AppRouter;

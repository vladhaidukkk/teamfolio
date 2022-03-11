import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getLoggedInStatus } from '../../../store/auth';

const PrivateRoute = ({ component: Component, children, ...rest }) => {
  const isLoggedIn = useSelector(getLoggedInStatus());

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default PrivateRoute;

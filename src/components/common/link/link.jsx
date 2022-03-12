import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import PropTypes from 'prop-types';

const Link = ({ path, children }) => {
  return (
    <MuiLink component={RouterLink} to={path}>
      {children}
    </MuiLink>
  );
};

Link.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
};

export default Link;

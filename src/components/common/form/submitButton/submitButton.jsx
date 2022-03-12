import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const SubmitButton = ({ children }) => {
  return (
    <Button type="submit" variant="contained">
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node,
};

export default SubmitButton;

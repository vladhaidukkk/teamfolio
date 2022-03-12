import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const FormBox = ({ children }) => {
  return <Box sx={{ mx: 'auto', width: '60ch', mt: '10ch' }}>{children}</Box>;
};

FormBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default FormBox;

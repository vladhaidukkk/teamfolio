import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';

const Form = ({ title, onSubmit, children }) => {
  return (
    <Box component="form" onSubmit={onSubmit} autoComplete="off">
      <Stack spacing={2}>
        <Typography variant="h4">{title}</Typography>
        {children}
      </Stack>
    </Box>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Form;

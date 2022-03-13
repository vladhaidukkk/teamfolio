import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
export default function BoxSx({ children }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'fff',
        marginBottom: '50px',
      }}
    >
      {children && children}
    </Box>
  );
}
BoxSx.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

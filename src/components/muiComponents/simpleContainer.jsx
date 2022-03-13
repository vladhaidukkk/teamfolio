import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            padding: '20px',
            bgcolor: '#fff',
            height: 'auto',
            boxShadow: 3,
            borderRadius: 2,
            my: 5,
            width: '100ch',
            mx: 'auto',
          }}
        >
          {' '}
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
SimpleContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

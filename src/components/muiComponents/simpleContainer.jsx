import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            padding: '20px',
            bgcolor: '#fff',
            height: 'auto',
            boxShadow: '0 5px 10px rgb(0 9 128 / 4%), 0 7px 18px rgb(0 9 128 / 5%)',
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

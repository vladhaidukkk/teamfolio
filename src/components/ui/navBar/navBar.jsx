import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = ({ pages, handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.path}
          component={Link}
          to={page.path}
          color="inherit"
          sx={{ mx: 0.5 }}
          onClick={handleCloseNavMenu}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
};
NavBar.propTypes = {
  pages: PropTypes.array,
  handleCloseNavMenu: PropTypes.func,
};

export default NavBar;

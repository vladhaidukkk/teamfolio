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
          component={Link}
          to={page.path}
          key={page.label}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
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

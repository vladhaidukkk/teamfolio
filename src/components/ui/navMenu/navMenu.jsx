import { Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavMenu = ({ pages, anchorElNav, handleCloseNavMenu }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page.label} onClick={handleCloseNavMenu}>
          <Typography component={Link} to={page.path} textAlign="center">
            {page.label}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

NavMenu.propTypes = {
  pages: PropTypes.array,
  anchorElNav: PropTypes.object,
  handleCloseNavMenu: PropTypes.func,
};

export default NavMenu;

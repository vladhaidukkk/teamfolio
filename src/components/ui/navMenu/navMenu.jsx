import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../common/link';

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
          <Link path={page.path}>{page.label}</Link>
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

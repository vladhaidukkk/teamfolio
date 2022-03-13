import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../common/link';

const AccountMenu = ({ menu, anchorElUser, handleCloseUserMenu }) => {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {menu.map((el) => (
        <MenuItem key={el.label} onClick={handleCloseUserMenu}>
          <Link path={el.path}>{el.label}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
};
AccountMenu.propTypes = {
  menu: PropTypes.array,
  anchorElUser: PropTypes.object,
  handleCloseUserMenu: PropTypes.func,
};

export default AccountMenu;

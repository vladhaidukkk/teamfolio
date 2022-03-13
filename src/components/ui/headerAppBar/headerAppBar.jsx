import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from '../../common';
import PropTypes from 'prop-types';
import { AccountMenu, NavMenu, NavBar } from '..';
import { useSelector } from 'react-redux';
import { getLoggedInStatus } from '../../../store/auth';
import { Link } from 'react-router-dom';
import { UserStatusConstants } from '../../../utils/constants';
import { getAccountData } from '../../../store/users';

const HeaderAppBar = ({ pages, menu }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const isLoggedIn = useSelector(getLoggedInStatus());
  const currentUser = useSelector(getAccountData());
  const currentUserStatus = currentUser?.status;
  console.log(isLoggedIn);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ marginBottom: '50px' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <NavMenu
              pages={pages}
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Logo />
          </Typography>
          <NavBar pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <>
                {currentUserStatus === UserStatusConstants.Guest && (
                  // TODO: replace with custom button
                  <Button component={Link} to={'/editresume'} color="inherit">
                    Join our team!
                  </Button>
                )}
                <Tooltip title="Open menu">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={currentUser.firstName + ' ' + currentUser.secondName}
                      src={currentUser.avatarUrl}
                    />
                  </IconButton>
                </Tooltip>
                <AccountMenu
                  menu={menu}
                  anchorElUser={anchorElUser}
                  handleCloseUserMenu={handleCloseUserMenu}
                />
              </>
            ) : (
              <>
                <Button component={Link} to={'/login'} color="inherit">
                  Login
                </Button>
                <Button component={Link} to={'/registration'} color="inherit">
                  Registration
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
HeaderAppBar.propTypes = {
  menu: PropTypes.array,
  pages: PropTypes.array,
};

export default HeaderAppBar;

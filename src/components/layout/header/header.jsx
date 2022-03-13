import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLoggedInStatus } from '../../../store/auth';
import { NavBarConstants, UserStatusConstants } from '../../../utils/constants';
import { HeaderAppBar } from '../../ui';
import { getAccountData } from '../../../store/users';

const Header = () => {
  const [menu, setMenu] = useState([]);
  const [pages, setPages] = useState([]);

  const isLoggedIn = useSelector(getLoggedInStatus());
  const currentUser = useSelector(getAccountData());
  const currentUserStatus = currentUser?.status;

  console.log(currentUserStatus);

  useEffect(() => {
    if (!isLoggedIn) {
      setPages(NavBarConstants.Logout.pages);
    } else {
      if (currentUserStatus === UserStatusConstants.TeamMember) {
        setMenu(NavBarConstants.LoginMember.menu);
        setPages(NavBarConstants.LoginMember.pages);
      }
      if (currentUserStatus === UserStatusConstants.Candidate) {
        setMenu(NavBarConstants.LoginCandidate.menu);
        setPages(NavBarConstants.LoginCandidate.pages);
      }
      if (currentUserStatus === UserStatusConstants.Guest) {
        setMenu(NavBarConstants.LoginGuest.menu);
        setPages(NavBarConstants.LoginGuest.pages);
      }
    }
  }, [isLoggedIn, currentUserStatus]);

  return <HeaderAppBar menu={menu} pages={pages} />;
};

export default Header;

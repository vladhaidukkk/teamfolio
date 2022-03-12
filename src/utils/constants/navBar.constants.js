const NavBarConstants = {
  Logout: {
    pages: [
      { label: 'Home', path: '/' },
      { label: 'Team', path: '/team' },
    ],
  },
  LoginMember: {
    pages: [
      { label: 'Home', path: '/' },
      { label: 'Team', path: '/team' },
      { label: 'Candidates', path: '/candidates' },
      { label: 'Favourites', path: '/favourites' },
    ],
    menu: [
      { label: 'Account', path: '/account' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Logout', path: '/logout' },
    ],
  },
  LoginGuest: {
    pages: [
      { label: 'Home', path: '/' },
      { label: 'Team', path: '/team' },
      { label: 'Favourites', path: '/favourites' },
    ],
    menu: [
      { label: 'Account', path: '/account' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Logout', path: '/logout' },
    ],
  },
  LoginCandidate: {
    pages: [
      { label: 'Home', path: '/' },
      { label: 'Team', path: '/team' },
      { label: 'Favourites', path: '/favourites' },
    ],
    menu: [
      { label: 'Account', path: '/account' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Logout', path: '/logout' },
    ],
  },
};

export default NavBarConstants;

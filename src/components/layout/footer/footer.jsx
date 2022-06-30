import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <BottomNavigation>
      <BottomNavigationAction
        label="Contacts"
        value="contactEmail"
        icon={
          <Link href="mailto:info@dream-team.com">
            {' '}
            <ContactMailIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={
          <a
            href="https://www.facebook.com/profile.php?id=100077175214153"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FacebookIcon />
          </a>
        }
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedIn"
        icon={
          <Link href="https://www.linkedin.com/" target="_blank">
            {' '}
            <LinkedInIcon />
          </Link>
        }
      />
      <BottomNavigationAction
        label="TwitterIcon"
        value="twitterIcon"
        icon={
          <Link to="https://twitter.com/" target="_blank">
            {' '}
            <TwitterIcon />
          </Link>
        }
      />
    </BottomNavigation>
  );
};
export default Footer;

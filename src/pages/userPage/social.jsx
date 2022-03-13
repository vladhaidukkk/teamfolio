import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PropTypes from 'prop-types';

const Social = ({ social }) => {
  console.log(social);
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="My Social Links"></AutoGridNoWrap>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {social.telegramUrl && (
            <a href={`${social.telegramUrl} `}>
              <TelegramIcon fontSize="large"></TelegramIcon>
            </a>
          )}
          {social.githubUrl && (
            <a href={`${social.githubUrl} `}>
              <GitHubIcon fontSize="large"></GitHubIcon>
            </a>
          )}
          {social.facebookUrl && (
            <a href={`${social.facebookUrl} `}>
              <FacebookIcon fontSize="large"></FacebookIcon>
            </a>
          )}
          {social.linkedinUrl && (
            <a href={`${social.linkedinUrl} `}>
              <LinkedInIcon fontSize="large"></LinkedInIcon>
            </a>
          )}
          {social.twitterUrl && (
            <a href={`${social.twitterUrl} `}>
              <TwitterIcon fontSize="large"></TwitterIcon>
            </a>
          )}
        </div>
      </BoxSx>
    </>
  );
};
Social.propTypes = {
  social: PropTypes.object,
};
export default Social;

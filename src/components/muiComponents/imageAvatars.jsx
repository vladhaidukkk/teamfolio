import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
export default function ImageAvatars() {
  return (
    <Stack sx={{ display: 'flex ', justifyContent: 'space-around' }} direction="row" spacing={2}>
      <Link to="www.instagram.com">
        <Avatar
          alt="Remy Sharp"
          src="https://logo-logos.com/wp-content/uploads/2016/10/Instagram_logo_icon.png"
        />
      </Link>
      <Avatar
        alt="Travis Howard"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://w7.pngwing.com/pngs/1000/19/png-transparent-github-logo-computer-icons-source-code-github-white-cat-like-mammal-carnivoran.png"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
      />
    </Stack>
  );
}

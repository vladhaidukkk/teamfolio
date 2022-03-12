import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import Bookmark from '../../common/bookmark';
import PropTypes from 'prop-types';
import { useState } from 'react';

const IntroUserCard = ({ users, onToggleBookMark }) => {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
              .toString(36)
              .substring(7)}.svg`}
            aria-label="memberCard"
          />
        }
        action={
          <IconButton aria-label="add to favorites">
            {/* <BookmarkBorderOutlinedIcon /> */}
            {/* <BookmarkOutlinedIcon /> */}

            <Bookmark status={user.bookmark} onClick={() => onToggleBookMark(user._id)} />
          </IconButton>
        }
        title="Member Name"
        subheader="Senior Front-end Developer"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Adaptability and Thirst for Learning. Codes, frameworks, and other tools constantly change
          in the world of IT. Creative and Critical Thinker.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" fullWidth="true">
          Additional info
        </Button>
      </CardActions>
    </Card>
  );
};

IntroUserCard.propTypes = {
  users: PropTypes.array.isRequired,
  // onSort: PropTypes.func.isRequired,
  // selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
};
export default IntroUserCard;

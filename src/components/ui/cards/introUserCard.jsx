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
import { useSelector } from 'react-redux';
import { getUserById } from '../../../store/users';

const IntroUserCard = ({ userId, onToggleBookMark }) => {
  // eslint-disable-next-line no-unused-vars
  const userData = useSelector(getUserById(userId));

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
            {/* <Bookmark status={userData.bookmark} onClick={() => onToggleBookMark(userData._id)} /> */}
            <Bookmark />
          </IconButton>
        }
        // title={`${userData.name}+" "+${userData.surname}`}
        // subheader={userData.profession}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Adaptability and Thirst for Learning. Codes, frameworks, and other tools constantly change
          in the world of IT. Creative and Critical Thinker.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" fullWidth={true}>
          Additional info
        </Button>
      </CardActions>
    </Card>
  );
};

IntroUserCard.propTypes = {
  userId: PropTypes.string,
  onToggleBookMark: PropTypes.func,
};
export default IntroUserCard;

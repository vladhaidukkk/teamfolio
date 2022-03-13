import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Bookmark from '../../common/bookmark';
import PropTypes from 'prop-types';
import { SubmitButton } from '../../common/form';

const IntroUserCard = ({ userData }) => {
  const { firstName, lastName, avatarUrl } = userData;

  return (
    <Card sx={{ maxWidth: 345 }}>
      у
      <CardHeader
        avatar={<Avatar sx={{ width: 56, height: 56 }} src={avatarUrl} aria-label="memberCard" />}
        action={
          <IconButton aria-label="add to favorites">
            {/* <Bookmark status={userData.bookmark} onClick={() => onToggleBookMark(userData._id)} /> */}
            <Bookmark />
          </IconButton>
        }
        title={firstName + ' ' + lastName}
        // subheader={profession}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Adaptability and Thirst for Learning. Codes, frameworks, and other tools constantly change
          in the world of IT. Creative and Critical Thinker.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <SubmitButton variant="contained" fullWidth={true}>
          Additional info
        </SubmitButton>
      </CardActions>
    </Card>
  );
};

IntroUserCard.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatarUrl: PropTypes.string,
  onToggleBookMark: PropTypes.func,
};
export default IntroUserCard;

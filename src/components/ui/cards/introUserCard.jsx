import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Bookmark from '../../common/bookmark';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { history } from '../../../utils/core';

const IntroUserCard = ({ user }) => {
  const { id, firstName, lastName, avatarUrl } = user;

  const redirectToUserPage = () => {
    history.push(`/users/${id}`);
  };

  if (user) {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar sx={{ width: 56, height: 56 }} src={avatarUrl} aria-label="memberCard" />}
          action={
            <IconButton aria-label="add to favorites">
              {/* <Bookmark status={userData.bookmark} onClick={() => onToggleBookMark(userData._id)} /> */}
              <Bookmark />
            </IconButton>
          }
          title={firstName + ' ' + lastName}
          // subheader={<Chip label={roles.label} color={roles.color} />}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Adaptability and Thirst for Learning. Codes, frameworks, and other tools constantly
            change in the world of IT. Creative and Critical Thinker.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" fullWidth={true} onClick={redirectToUserPage}>
            Additional info
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return <h1>User Not Found</h1>;
  }
};

IntroUserCard.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatarUrl: PropTypes.string,
  onToggleBookMark: PropTypes.func,
};
export default IntroUserCard;

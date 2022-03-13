import { Grid } from '@mui/material';
import React from 'react';
import IntroUserCard from '../../ui/cards/introUserCard';
import PropTypes from 'prop-types';

const UsersList = ({ users }) => {
  return (
    <Grid container spacing={{ xs: 5, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
      {users.map((user, index) => (
        <Grid item xs={12} sm={4} md={3} lg={3} key={index} style={{ margin: '0 auto' }}>
          <IntroUserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};
UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;

import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUserById } from '../../../store/users';
import Typography from '@mui/material/Typography';

const TestimonialItem = ({ data }) => {
  const userData = useSelector(getUserById(data.creatorId));

  return (
    <Box sx={{ boxShadow: 3, bgcolor: '#f5f5f5', p: 2, pb: 3, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Avatar
          alt={userData.firstName + ' ' + userData.secondName}
          src={userData.avatarUrl}
          sx={{ width: 48, height: 48, mr: 1 }}
        />
        <Typography>{userData.firstName + ' ' + userData.secondName}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Typography variant="h5">Message</Typography>
        <Typography nowrap={false}>{data.message}</Typography>
      </Box>
    </Box>
  );
};

TestimonialItem.propTypes = {
  data: PropTypes.object,
};

export default TestimonialItem;

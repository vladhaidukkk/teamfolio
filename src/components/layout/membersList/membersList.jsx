import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTeamMembers } from '../../../store/users';
import { paginate } from '../../../utils/helpers';
import { PaginationComp, UsersList } from '../../common';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const MembersList = ({ pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const users = useSelector(getTeamMembers());

  if (!users) return 'No users found...';

  const pageQty = Math.ceil(users.length / pageSize);

  const handlePageChange = (_, num) => {
    setCurrentPage(num);
  };

  const usersCrop = paginate(users, currentPage, pageSize);

  return (
    <Box py={5}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 5 }}>
        Team Members
      </Typography>
      <UsersList users={usersCrop} />
      <PaginationComp
        pageQty={pageQty}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Box>
  );
};
MembersList.propTypes = {
  pageSize: PropTypes.number,
};

export default MembersList;

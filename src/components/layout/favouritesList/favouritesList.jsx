import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFavourites } from '../../../store/users';
import { paginate } from '../../../utils/helpers';
import { PaginationComp, UsersList } from '../../common';
import PropTypes from 'prop-types';
import { getAccountId } from '../../../store/auth';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const FavouritesList = ({ pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentUserId = useSelector(getAccountId());
  const users = useSelector(getFavourites(currentUserId));

  if (!users) return 'No users found...';

  const pageQty = Math.ceil(users.length / pageSize);

  const handlePageChange = (_, num) => {
    setCurrentPage(num);
  };

  const usersCrop = paginate(users, currentPage, pageSize);

  return (
    <Box py={5}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 5 }}>
        Favourites
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
FavouritesList.propTypes = {
  pageSize: PropTypes.number,
};

export default FavouritesList;

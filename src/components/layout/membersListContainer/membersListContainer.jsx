import React, { useState } from 'react';
import IntroUserCard from '../../ui/cards/introUserCard';
import { Box, Grid, Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTeamMembers } from '../../../store/users';
import { paginate } from '../../../utils/helpers';

const MembersListContainer = () => {
  const PAGE_SIZE = 4;
  const users = useSelector(getTeamMembers());
  const [currentPage, setCurrentPage] = useState(1);
  const pageQty = Math.ceil(users.length / PAGE_SIZE);

  const handlePageChange = (_, num) => {
    setCurrentPage(num);
  };

  const usersCrop = paginate(users, currentPage, PAGE_SIZE);

  return (
    <>
      <Grid container spacing={{ xs: 5, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        {usersCrop.map((user, index) => (
          <Grid item xs={12} sm={4} md={3} lg={3} key={index} style={{ margin: '0 auto' }}>
            <IntroUserCard user={user} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="5rem">
        {pageQty > 1 && (
          <Pagination count={pageQty} page={currentPage} onChange={handlePageChange} />
        )}
      </Box>
    </>
  );
};

export default MembersListContainer;

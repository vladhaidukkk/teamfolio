import { Box, Pagination } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const PaginationComp = ({ pageQty, currentPage, handlePageChange }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="5rem">
      {pageQty > 1 && <Pagination count={pageQty} page={currentPage} onChange={handlePageChange} />}
    </Box>
  );
};
PaginationComp.propTypes = {
  pageQty: PropTypes.number,
  currentPage: PropTypes.number,
  handlePageChange: PropTypes.func,
};

export default PaginationComp;

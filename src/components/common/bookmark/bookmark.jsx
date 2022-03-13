import React from 'react';
import PropTypes from 'prop-types';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const Bookmark = ({ status }) => {
  return <>{status ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}</>;
};

Bookmark.propTypes = {
  status: PropTypes.bool,
};
export default Bookmark;

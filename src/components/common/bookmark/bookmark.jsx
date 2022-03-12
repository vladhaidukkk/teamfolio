import React from 'react';
import PropTypes from 'prop-types';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const Bookmark = ({ status, ...rest }) => {
  return (
    // <button {...rest}>
    //   <i className={'bi bi-bookmark' + (status ? '-heart-fill' : '')} />
    // </button>
    <div {...rest}>{status ? <BookmarkBorderOutlinedIcon /> : <BookmarkOutlinedIcon />}</div>
  );
};

Bookmark.propTypes = {
  status: PropTypes.bool,
};
export default Bookmark;

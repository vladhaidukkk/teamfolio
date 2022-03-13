import React from 'react';
import { Input } from '@mui/material';
import PropTypes from 'prop-types';
import { PhotoCamera } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const FileField = ({ id, onChange }) => {
  return (
    <label htmlFor={id}>
      <Input id={id} type="file" sx={{ display: 'none' }} onChange={onChange} />
      <IconButton color="primary" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
  );
};

FileField.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default FileField;

import React from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';

const TextareaField = ({ label, value, onChange, error, rows }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel error={!!error}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        value={value}
        onChange={onChange}
        error={!!error}
        multiline
        rows={rows}
      />
      {error && <FormHelperText error={!!error}>{error.message}</FormHelperText>}
    </FormControl>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
  rows: PropTypes.number,
};

export default TextareaField;

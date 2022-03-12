import React from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';

const TextField = ({ label, value, onChange, error }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel error={!!error}>{label}</InputLabel>
      <OutlinedInput label={label} value={value} onChange={onChange} error={!!error} />
      {error && <FormHelperText error={!!error}>{error.message}</FormHelperText>}
    </FormControl>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
};

export default TextField;

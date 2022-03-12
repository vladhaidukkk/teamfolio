import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

const DateField = ({ label, value, onChange, error }) => {
  return (
    <DatePicker
      disableFuture
      label={label}
      openTo="year"
      views={['year', 'month', 'day']}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          error={!!error}
          helperText={error ? error.message : undefined}
        />
      )}
    />
  );
};

DateField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  error: PropTypes.object,
};

export default DateField;

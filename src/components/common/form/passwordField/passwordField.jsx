import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';

const PasswordField = ({ value, onChange, error }) => {
  const [isVisible, setVisible] = useState(false);

  const handleClickShowPassword = () => {
    setVisible(!isVisible);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel error={!!error}>Password</InputLabel>
      <OutlinedInput
        label="Password"
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        error={!!error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {isVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error && <FormHelperText error={!!error}>{error.message}</FormHelperText>}
    </FormControl>
  );
};

PasswordField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
};

export default PasswordField;

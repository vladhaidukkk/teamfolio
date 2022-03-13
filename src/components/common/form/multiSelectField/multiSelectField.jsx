import React from 'react';
import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 35;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelectField = ({ label, value, options, onChange, error }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel error={!!error}>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => selected.map((item) => item.label).join(', ')}
        MenuProps={MenuProps}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.label} value={option}>
              <Checkbox checked={value.map((item) => item.label).indexOf(option.label) > -1} />
              <ListItemText primary={option.label} />
            </MenuItem>
          );
        })}
      </Select>
      {error && <FormHelperText error={!!error}>{error.message}</FormHelperText>}
    </FormControl>
  );
};

MultiSelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array,
  options: PropTypes.array,
  onChange: PropTypes.func,
  error: PropTypes.object,
};

export default MultiSelectField;

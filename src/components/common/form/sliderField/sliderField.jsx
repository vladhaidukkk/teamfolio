import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Slider } from '@mui/material';

const SliderField = ({ label, value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ pb: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Slider
        getAriaValueText={(value) => `${value}%`}
        valueLabelDisplay="auto"
        label={label}
        value={value}
        onChange={onChange}
        step={1}
        marks
        min={0}
        max={10}
      />
    </FormControl>
  );
};

SliderField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default SliderField;

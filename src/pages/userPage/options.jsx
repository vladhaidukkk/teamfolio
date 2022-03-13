import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';
import PropTypes from 'prop-types';
const Options = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        border: 'none',
        backgroundColor: '#fff',
        cursor: 'pointer',
        display: 'flex',
        marginLeft: 'auto',
      }}
    >
      <SettingsIcon></SettingsIcon>
    </button>
  );
};
Options.propTypes = {
  handleClick: PropTypes.func,
};
export default Options;

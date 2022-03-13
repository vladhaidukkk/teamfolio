import { Chip } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Badges = ({ roles }) => {
  return roles.map((role, idx) => (
    <Chip key={idx} size="small" label={role.label} sx={{ bgcolor: role.color, margin: 0.2 }} />
  ));
};
Badges.propTypes = { roles: PropTypes.array };

export default Badges;

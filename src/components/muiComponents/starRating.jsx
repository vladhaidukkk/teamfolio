import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function TextRating({ options }) {
  const { label } = options;
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography style={{ marginRigh: '5px' }}>{label}</Typography>
      <Rating
        name="text-feedback"
        value={Number(5)}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}
TextRating.propTypes = {
  options: PropTypes.object,
};

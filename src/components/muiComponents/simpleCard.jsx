import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

OutlinedCard.propTypes = {
  data: PropTypes.string,
};

export default function OutlinedCard({ data }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CardContent sx={{ fontSize: '20px', maxWidth: '50%' }}>
        <Typography sx={{ fontSize: '20px' }} variant="body2">
          {data}
        </Typography>
      </CardContent>
    </Box>
  );
}

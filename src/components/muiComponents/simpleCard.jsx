import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

OutlinedCard.propTypes = {
  data: PropTypes.array,
};

export default function OutlinedCard({ data }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((card) => {
        return (
          <CardContent sx={{ maxWidth: '50%' }} key={card.job}>
            <Typography variant="h5" component="div">
              {card.job}
            </Typography>
            <Typography variant="h5" component="div">
              {card.year}
            </Typography>
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2">{card.desc}</Typography>
          </CardContent>
        );
      })}
    </Box>
  );
}

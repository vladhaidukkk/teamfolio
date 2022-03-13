import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const ProjectSlide = ({ img, name }) => {
  return (
    <Box
      boxShadow={3}
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        height: '300px',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <Typography
        variant="h1"
        sx={{
          zIndex: 2,
          bgcolor: 'rgba(255,255,255,0.5)',
          m: 2,
          py: 1,
          px: 1.5,
          fontSize: '28px',
          fontWeight: 300,
          borderRadius: 1,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

ProjectSlide.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default ProjectSlide;

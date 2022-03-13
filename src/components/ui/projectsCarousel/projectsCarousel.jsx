import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ProjectConstants } from '../../../utils/constants';
import { Box } from '@mui/material';
import ProjectSlide from '../projectSlide/projectSlide';
import Typography from '@mui/material/Typography';

const ProjectsCarousel = () => {
  return (
    <Box py={5}>
      <Typography variant="h2" textAlign="center">
        Our Projects
      </Typography>
      <Box sx={{ maxWidth: '80ch', mx: 'auto', my: 5 }}>
        <Carousel sx={{ width: '100%', p: 1, px: 9, ml: -9 }}>
          {ProjectConstants.Entities.map((project) => {
            return <ProjectSlide key={project.name} img={project.img} name={project.name} />;
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ProjectsCarousel;

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ProjectConstants } from '../../../utils/constants';
import { Box } from '@mui/material';
import ProjectSlide from '../projectSlide/projectSlide';

const ProjectsCarousel = () => {
  return (
    <Box sx={{ width: '80ch', mx: 'auto', my: 5 }}>
      <Carousel sx={{ width: '100%' }}>
        {ProjectConstants.Entities.map((project) => {
          return <ProjectSlide key={project.name} img={project.img} name={project.name} />;
        })}
      </Carousel>
    </Box>
  );
};

export default ProjectsCarousel;

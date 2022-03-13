import React from 'react';
import { useSelector } from 'react-redux';
import { getTestimonials, getTestimonialsLoadingStatus } from '../../../store/testimonials';
import Carousel from 'react-material-ui-carousel';
import { Box, CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TestimonialItem } from '../../ui';
import TestimonialForm from '../../ui/testimonialForm/testimonialForm';

const Testimonials = () => {
  const isTestimonialsLoading = useSelector(getTestimonialsLoadingStatus());
  const testimonials = useSelector(getTestimonials());

  if (isTestimonialsLoading) {
    return (
      <Box textAlign="center" py={5}>
        <CircularProgress />
        <Typography>Loading testimonials</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '80ch', mx: 'auto', pt: 5, pb: 7 }}>
      <Typography variant="h2" textAlign="center" mb={4}>
        Testimonials
      </Typography>
      {testimonials ? (
        <Carousel sx={{ width: '100%', p: 1, px: 9, ml: -9 }}>
          {testimonials.map((testimonial) => {
            return <TestimonialItem key={testimonial.id} data={testimonial} />;
          })}
        </Carousel>
      ) : (
        <Typography>No testimonials</Typography>
      )}
      <Box mt={2}>
        <TestimonialForm />
      </Box>
    </Box>
  );
};

export default Testimonials;

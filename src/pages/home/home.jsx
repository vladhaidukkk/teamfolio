import React from 'react';
import { Container, Divider } from '@mui/material';
import { Footer, Intro, MembersList, Testimonials } from '../../components/layout';
import { ProjectsCarousel } from '../../components/ui';

const Home = () => {
  return (
    <>
      <Container>
        <Divider />
        <Intro />
        <Divider />
        <ProjectsCarousel />
        <Divider />
        <MembersList pageSize={4} />
        <Divider />
        <Testimonials />
        <Divider />
        <Footer />
      </Container>
    </>
  );
};

export default Home;

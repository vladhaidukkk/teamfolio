import React from 'react';
import { Container, Divider } from '@mui/material';
import { Footer, Intro, MembersListContainer } from '../../components/layout';

const Home = () => {
  return (
    <>
      <Container>
        <Divider />
        <Intro />
        <Divider />
        <MembersListContainer />
        <Divider />
        <Footer />
      </Container>
    </>
  );
};

export default Home;

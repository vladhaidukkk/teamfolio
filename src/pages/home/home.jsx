import React from 'react';
import { Container, Divider } from '@mui/material';
import { Intro, MembersListContainer } from '../../components/layout';

const Home = () => {
  return (
    <>
      <Container>
        <Divider />
        <Intro />
        <Divider />
        <MembersListContainer />
      </Container>
    </>
  );
};

export default Home;

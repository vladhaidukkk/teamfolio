import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Intro = () => {
  return (
    <Container maxWidth="false">
      <Box sx={{ textAlign: 'center', fontWeight: 500 }}>
        <h1>Intro</h1>
        <p>
          Welcome to the personal page of Dream-team. We are a community of developers who will be
          grateful to invite professionals to our team. On the sliders below you can see our
          projects and our team members. And if you are interested in taking part in these projects,
          just click the button below, fill out a simple candidate form and wait for our approval.
        </p>
      </Box>
    </Container>
  );
};

export default Intro;

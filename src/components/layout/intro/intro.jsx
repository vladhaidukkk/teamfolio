import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IntroUserCard from '../../ui/cards/introUserCard';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

const Intro = () => {
  return (
    <Container maxWidth="false">
      <Box sx={{ textAlign: 'center', fontWeight: 500 }}>
        <h1>Intro</h1>
        <Typography>
          Welcome to the personal page of Dream-team. We are a community of developers who will be
          grateful to invite professionals to our team.
        </Typography>
        <Typography paragraph>
          On the sliders below you can see our projects and our team members.
        </Typography>
        <Typography paragraph>
          If you are interested in taking part in these projects, just click the button below, fill
          out a simple candidate form and wait for our approval.
        </Typography>
        <Divider />
        <IntroUserCard />
      </Box>
    </Container>
  );
};

export default Intro;
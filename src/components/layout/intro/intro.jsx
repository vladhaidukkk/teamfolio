import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SprintImage from '../../../assets/Sprint.jpg';

const Intro = () => {
  return (
    <Container maxWidth="false">
      <Box sx={{ textAlign: 'center', fontWeight: 500 }}>
        <Typography variant="h1">Intro</Typography>
        <Box>
          <img
            src={SprintImage}
            style={{
              width: 200,
              height: 125,
              display: 'inline-block',
              verticalAlign: 'top',
              float: 'left',
              margin: '7px 7px 7px 0',
            }}
          />
        </Box>

        <Box>
          <Typography
            style={{
              cursor: 'pointer',
              display: 'inline-block',
              verticalAlign: 'top',
              width: 'calc(100% - 35px)',
              float: 'right',
              margin: '7px 7px 7px 0',
            }}
          >
            Welcome to the personal page of Dream-team. We are a community of developers who will be
            grateful to invite professionals to our team.
          </Typography>
        </Box>
        {/* <img src={SprintImage} alt="dream-team" width="250px" float="left" /> */}

        <Typography paragraph>
          On the sliders below you can see our projects and our team members.
        </Typography>
        <Typography paragraph>
          If you are interested in taking part in these projects, just click the button below, fill
          out a simple candidate form and wait for our approval.
        </Typography>
      </Box>
    </Container>
  );
};

export default Intro;

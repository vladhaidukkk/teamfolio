import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const Intro = () => {
  return (
    <Box py={5}>
      <Typography variant="h1" style={{ textAlign: 'center' }}>
        Intro
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs="auto">
          <img
            src={
              'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2368&q=80\n' +
              '\n'
            }
            style={{
              height: 200,
              display: 'block',
              verticalAlign: 'top',
              float: 'left',
              margin: '2px 2px 2px 0',
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{
              cursor: 'pointer',
              padding: '7px 7px 7px 0',
              textAlign: 'justify',
            }}
          >
            Welcome to the personal page of Dream-team. We are a community of developers who will be
            grateful to invite professionals to our team.
          </Typography>
          <Typography paragraph>
            On the sliders below you can see our projects and our team members.
          </Typography>
          <Typography paragraph>
            If you are interested in taking part in these projects, just click the button below,
            fill out a simple candidate form and wait for our approval.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;

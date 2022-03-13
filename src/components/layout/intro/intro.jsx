import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <Box pb={7}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 5 }}>
        Welcome to our Team
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            width: '40%',
            mr: 5,
          }}
        >
          <img
            src={
              'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2368&q=80'
            }
            style={{
              width: '100%',
              borderRadius: '5px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack spacing={2}>
            <Typography fontSize={18}>
              Welcome to the personal page of Dream-team. We are a community of developers who will
              be grateful to invite professionals to our team. On the sliders below you can see our
              projects and our team members.
            </Typography>
            <Typography fontSize={18}>
              If you are interested in taking part in these projects, just click the button below,
              fill out a simple candidate form and wait for our approval.
            </Typography>
            <Button
              component={Link}
              to="/editresume"
              variant="contained"
              sx={{ width: 'max-content' }}
              size="large"
            >
              Join our team
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Favorite from './favorite';
import { Box } from '@mui/system';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({ children, name, avatar }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginBottom: '50px',
        maxWidth: 500,
        flexGrow: 1,
        boxShadow: 0,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      {children && children[0]}
      <Grid container spacing={2}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
          item
        >
          <Box
            sx={{
              margin: '0 auto',
              width: 150,
              justifyContent: 'center',
              height: 200,
              marginBottom: 0,
            }}
          >
            <Img
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
              alt="complex"
              src={avatar}
            />
          </Box>
          <Favorite></Favorite>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                I’m a Front End Developer. I have a Passion for Creating Clean, Beautiful,
                Interactive, Minimalistic, Responsive and User Friendly UI, Developed by Modular,
                Scalable and Functional Code. When, while the lovely valley teems with vapour around
                me, I have created more websites, most of which required great skills and tricks to
                be done perfectly.
              </Typography>
              {children[1] && children[1]}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
ComplexGrid.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

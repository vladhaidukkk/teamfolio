import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import Favorite from './favorite';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({ children, name }) {
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
          <ButtonBase
            sx={{
              width: 128,
              height: 128,
            }}
          >
            <Img
              alt="complex"
              src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
                .toString(36)
                .substring(7)}.svg`}
            />
          </ButtonBase>{' '}
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

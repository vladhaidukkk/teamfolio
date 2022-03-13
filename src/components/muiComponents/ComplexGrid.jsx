import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Favorite from './favorite';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

export default function ComplexGrid({ children, name, avatar, desc }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginBottom: '20px',
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
          }}
          item
        >
          <Box
            sx={{
              margin: '0 auto',
              width: 150,
              justifyContent: 'center',
              marginBottom: 0,
            }}
          >
            <Avatar alt={name} src={avatar} sx={{ width: 150, height: 150 }} />
            <Favorite />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom fontSize={32}>
                {name}
              </Typography>
              {desc && (
                <Typography gutterBottom fontSize={18}>
                  {desc}
                </Typography>
              )}
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
  desc: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

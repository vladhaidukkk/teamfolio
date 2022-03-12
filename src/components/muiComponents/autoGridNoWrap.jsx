import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

export default function AutoGridNoWrap({ message }) {
  const media = useMediaQuery('(fontSize:15px)');
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          boxShadow: 0,
          p: 2,
        }}
      >
        <Grid sx={{ paddingLeft: 0 }} container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Typography sx={{ color: '#2583fd' }} variant="h5" noWrap>
              {message}
              {media}
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
AutoGridNoWrap.propTypes = {
  message: PropTypes.string,
};

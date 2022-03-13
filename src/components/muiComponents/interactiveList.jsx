import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ data }) {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  function generate(data) {
    return Object.keys(data).map((value) => (
      <ListItem key={value} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ListItemAvatar>
          <AccountCircleIcon>
            <FolderIcon />
          </AccountCircleIcon>
        </ListItemAvatar>
        <ListItemText primary={data[value]} secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    ));
  }

  return (
    <Box sx={{ fontWeight: 'bold', maxWidth: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Demo>
            <List sx={{ display: 'flex', flexWrap: 'wrap' }} dense={dense}>
              {generate(data)}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
InteractiveList.propTypes = {
  data: PropTypes.object,
};

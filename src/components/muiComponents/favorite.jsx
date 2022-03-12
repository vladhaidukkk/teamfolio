import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Favorite() {
  const [value, setValue] = React.useState(null);
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={() => {
          setValue((prevState) => (prevState === null ? 0 : null));
        }}
      >
        <BottomNavigationAction
          label={value === null ? 'Add To Favorites' : 'Remove'}
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

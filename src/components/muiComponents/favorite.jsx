import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { getAccountData, toggleBookmark } from '../../store/users';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Favorite() {
  const { userId } = useParams();
  const userAuth = useSelector(getAccountData());
  const dispatch = useDispatch();

  const isBookmarked = userAuth?.favourites?.includes(userId);

  const handleToggleBookmark = () => {
    dispatch(toggleBookmark(userAuth.id, userId));
  };

  return (
    <Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label={isBookmarked ? 'Remove' : 'Add To Favorites'}
          icon={<FavoriteIcon />}
          onClick={handleToggleBookmark}
        />
      </BottomNavigation>
    </Box>
  );
}

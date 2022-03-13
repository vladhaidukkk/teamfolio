import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IntroUserCard from '../../ui/cards/introUserCard';

const MembersListContainer = () => {
  const [users, setUsers] = useState();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState();

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return {
            ...user,
            bookmark: !user.bookmark,
          };
        }
        return user;
      })
    );
  };
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <IntroUserCard userData={user} onToggleBookMark={handleToggleBookMark} />
      </ListItem>
    </List>
  );
};

export default MembersListContainer;

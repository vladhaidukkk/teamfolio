import React from 'react';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../store/users';
import { Button, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Header, Intro, MembersListContainer } from '../../components/layout';

const Home = () => {
  return (
    <>
      <Header />
      <Divider />
      <Intro />
      <Divider />
      <MembersListContainer />
    </>
  );
};

export default Home;

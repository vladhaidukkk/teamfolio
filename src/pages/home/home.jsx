import React from 'react';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../store/users';
import { Button, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Header, Intro, MembersListContainer } from '../../components/layout';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Link to="/candidates">Candidates</Link>
      <Button variant="contained" onClick={() => dispatch(loadUsers())}>
        get users
      </Button>
      <Button variant="contained" onClick={() => dispatch(loadUsers())}>
        get user
      </Button>
      <Divider />
      <Intro />
      <Divider />
      <MembersListContainer />
    </>
  );
};

export default Home;

import React from 'react';
import Header from '../../components/layout/header/header';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../store/users';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

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
    </>
  );
};

export default Home;

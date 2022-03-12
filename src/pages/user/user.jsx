import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAccountData } from '../../store/auth';

const User = () => {
  const { userId } = useParams();
  const { id } = useSelector(getAccountData());
  return (
    <>
      <div>User page</div>
      {userId === id && (
        <Button component={Link} to={'/editresume'}>
          Edit resume
        </Button>
      )}
      <p>{userId}</p>
    </>
  );
};

export default User;

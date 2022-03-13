import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAccountId } from '../../store/auth';

const User = () => {
  const { userId } = useParams();
  const accountId = useSelector(getAccountId());

  return (
    <>
      <div>User page</div>
      {userId === accountId && (
        <Button component={Link} to={'/editresume'}>
          Edit resume
        </Button>
      )}
      <p>{userId}</p>
    </>
  );
};

export default User;

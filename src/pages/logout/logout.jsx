import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/auth';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return <h1>Loading...</h1>;
};

export default Logout;

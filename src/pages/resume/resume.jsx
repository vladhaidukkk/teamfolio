import React from 'react';
import { useSelector } from 'react-redux';
import { getAccountId } from '../../store/auth';
import { Redirect } from 'react-router-dom';

const Resume = () => {
  const accountId = useSelector(getAccountId());

  return <Redirect to={`/users/${accountId}`} />;
};

export default Resume;

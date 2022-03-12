import React from 'react';
import { useSelector } from 'react-redux';
import { getAccountId } from '../../store/auth';
import { history } from '../../utils/core';

const Resume = () => {
  const accountId = useSelector(getAccountId());
  history.push(`/users/${accountId}`);

  return (
    <>
      <div>Loading resume page...</div>
    </>
  );
};

export default Resume;

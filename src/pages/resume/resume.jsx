import React from 'react';
import { useSelector } from 'react-redux';
import { getAccountData } from '../../store/auth';
import { history } from '../../utils/core';

const Resume = () => {
  const { id } = useSelector(getAccountData());
  history.push(`/users/${id}`);

  return (
    <>
      <div>Loading resume page...</div>
    </>
  );
};

export default Resume;

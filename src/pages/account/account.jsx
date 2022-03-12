import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';

const Account = () => {
  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Main', path: '/' },
            { name: 'Account', path: '' },
          ]}
        />
        <div>Account page</div>
      </Container>
    </>
  );
};

export default Account;

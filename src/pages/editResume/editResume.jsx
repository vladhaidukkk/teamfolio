import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';

const EditResume = () => {
  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Main', path: '/' },
            { name: 'Edit resume', path: '' },
          ]}
        />
        <div>EditResume page</div>
      </Container>
    </>
  );
};

export default EditResume;

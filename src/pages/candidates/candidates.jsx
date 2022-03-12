import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';

const Candidates = () => {
  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Main', path: '/' },
            { name: 'Candidates', path: '' },
          ]}
        />
        <div>candidates page</div>
      </Container>
    </>
  );
};

export default Candidates;

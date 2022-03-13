import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';
import CandidateList from '../../components/layout/candidatesList/candidatesList';

const Candidates = () => {
  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Home', path: '/' },
            { name: 'Candidates', path: '' },
          ]}
        />
        <CandidateList pageSize={8} />
      </Container>
    </>
  );
};

export default Candidates;

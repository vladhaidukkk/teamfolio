import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';
import MembersList from '../../components/layout/membersList/membersList';

const Team = () => {
  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Main', path: '/' },
            { name: 'Team', path: '' },
          ]}
        />
        <MembersList pageSize={8} />
      </Container>
    </>
  );
};

export default Team;

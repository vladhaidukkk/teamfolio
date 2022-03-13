import { Container } from '@mui/material';
import React from 'react';
import { UniversalBreadcrumbs } from '../../components/common';
import { FavouritesList } from '../../components/layout';

const Favourites = () => {
  return (
    <>
      <Container>
        <UniversalBreadcrumbs
          input={[
            { name: 'Home', path: '/' },
            { name: 'Team', path: '' },
          ]}
        />
        <FavouritesList pageSize={8} />
      </Container>
    </>
  );
};

export default Favourites;

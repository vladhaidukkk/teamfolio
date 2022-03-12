import React from 'react';
import { AppLoader } from './components/hoc';
import { AppRouter } from './components/routing';
import { Header } from './components/layout';
import './index.css';

const App = () => {
  return (
    <AppLoader>
      <Header />
      <AppRouter />
    </AppLoader>
  );
};

export default App;

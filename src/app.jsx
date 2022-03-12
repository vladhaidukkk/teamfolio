import React from 'react';
import { AppLoader } from './components/hoc';
import { AppRouter } from './components/routing';
import { Header } from './components/layout';
import NotificationContainer from './components/ui/notificationContainer';

const App = () => {
  return (
    <>
      <AppLoader>
        <Header />
        <AppRouter />
      </AppLoader>
      <NotificationContainer />
    </>
  );
};

export default App;

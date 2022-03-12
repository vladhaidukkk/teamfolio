import React from 'react';
import { AppRouter } from './components/routing';
import NotificationContainer from './components/ui/notificationContainer';

const App = () => {
  return (
    <>
      <AppRouter />
      <NotificationContainer />
    </>
  );
};

export default App;

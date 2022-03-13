import React from 'react';
import { AppLoader, ErrorHandler } from './components/hoc';
import { AppRouter } from './components/routing';
import { Header } from './components/layout';
import NotificationContainer from './components/ui/notificationContainer';

const App = () => {
  return (
    <ErrorHandler>
      <AppLoader>
        <Header />
        <AppRouter />
      </AppLoader>
      <NotificationContainer />
    </ErrorHandler>
  );
};

export default App;

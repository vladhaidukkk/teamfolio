import React from 'react';
import { ToastContainer } from 'material-react-toastify';

const NotificationContainer = () => {
  return <ToastContainer position="bottom-right" autoClose={3000} limit={3} />;
};

export default NotificationContainer;

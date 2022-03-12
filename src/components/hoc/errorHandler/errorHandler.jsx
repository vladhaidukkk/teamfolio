import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersError } from '../../../store/users';
import { getAuthError } from '../../../store/auth';
import { toast } from 'material-react-toastify';

const ErrorHandler = ({ children }) => {
  const authError = useSelector(getAuthError());
  const usersError = useSelector(getUsersError());

  useEffect(() => {
    if (authError) toast.error(authError);
    if (usersError) toast.error(usersError);
  }, [authError, usersError]);

  return children;
};

ErrorHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ErrorHandler;

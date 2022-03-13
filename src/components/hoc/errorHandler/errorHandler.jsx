import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersError } from '../../../store/users';
import { getAuthError } from '../../../store/auth';
import { toast } from 'material-react-toastify';
import { getTestimonialsError } from '../../../store/testimonials';

const ErrorHandler = ({ children }) => {
  const authError = useSelector(getAuthError());
  const usersError = useSelector(getUsersError());
  const testimonialsError = useSelector(getTestimonialsError());

  useEffect(() => {
    if (authError) toast.error(authError);
    if (usersError) toast.error(usersError);
    if (testimonialsError) toast.error(testimonialsError);
  }, [authError, usersError, testimonialsError]);

  return children;
};

ErrorHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ErrorHandler;

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLoadingStatus, loadUsers } from '../../../store/users';
import { loadTestimonials } from '../../../store/testimonials';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const usersIsLoading = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTestimonials());
  }, []);

  if (usersIsLoading) return 'loading...';

  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppLoader;

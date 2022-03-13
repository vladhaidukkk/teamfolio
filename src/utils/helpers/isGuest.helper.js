import { UserStatusConstants } from '../constants';

const isGuest = (userData) => {
  return userData?.status === UserStatusConstants.Guest;
};

export default isGuest;

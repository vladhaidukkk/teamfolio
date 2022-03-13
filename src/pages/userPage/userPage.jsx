import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SimpleContainer from '../../components/muiComponents/simpleContainer';
import { getAccountData, getUserById, updateUser } from '../../store/users';
import { UserStatusConstants } from '../../utils/constants';
import calculateAge from '../../utils/helpers/calculateAge.helper';
import AboutMe from './aboutMe';
import Experience from './experiense';
import Options from './options';
import PersonalInfo from './personalInfo';
import Skills from './skills';
import Social from './social';

const UserPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const account = useSelector(getUserById(userId));
  const accData = useSelector(getAccountData());

  const redirectToEdit = () => {
    history.push(`/editresume`);
  };

  const handleAddMember = () => {
    dispatch(updateUser(userId, { status: UserStatusConstants.TeamMember }));
  };

  if (accData.status === 'guest' && account.id !== accData.id) {
    history.push('/');
  }

  if (account) {
    const { firstName, lastName, email, avatarUrl } = account;
    const yearsOld = calculateAge(account.dateOfBirth);
    return (
      <>
        <SimpleContainer>
          {accData.status === UserStatusConstants.TeamMember &&
            account.status === UserStatusConstants.Candidate && (
              <Button onClick={handleAddMember}>Add this user our team</Button>
            )}
          {account.id === accData.id && <Options handleClick={redirectToEdit} />}
          <AboutMe name={firstName + ' ' + lastName} avatar={avatarUrl} />
          <PersonalInfo name={firstName + ' ' + lastName} email={email} years={yearsOld} />
          <Skills />
          <Experience />
          <Social />
        </SimpleContainer>
      </>
    );
  } else {
    return <h1>User Not Found</h1>;
  }
};

export default UserPage;

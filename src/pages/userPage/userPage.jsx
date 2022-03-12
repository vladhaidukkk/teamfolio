import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SimpleContainer from '../../components/muiComponents/simpleContainer';
import { getUserById } from '../../store/users';
import calculateAge from '../../utils/helpers/calculateAge.helper';
import AboutMe from './aboutMe';
import Experience from './experiense';
import PersonalInfo from './personalInfo';
import Skills from './skills';
import Social from './social';

const UserPage = () => {
  const { userId } = useParams();
  const account = useSelector(getUserById(userId));
  if (account) {
    const { firstName, lastName, email } = account;
    const yearsOld = calculateAge(account.dateOfBirth);

    return (
      <>
        <SimpleContainer>
          <AboutMe name={firstName + ' ' + lastName} />
          <PersonalInfo
            name={firstName + ' ' + lastName}
            email={email}
            years={yearsOld}
          ></PersonalInfo>
          <Skills></Skills>
          <Experience></Experience>
          <Social></Social>
        </SimpleContainer>
      </>
    );
  } else {
    return <h1>User Not Found</h1>;
  }
};

export default UserPage;

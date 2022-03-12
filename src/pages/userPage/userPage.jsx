import React from 'react';
import SimpleContainer from '../../components/muiComponents/simpleContainer';
import AboutMe from './aboutMe';
import Experience from './experiense';
import PersonalInfo from './personalInfo';
import Skills from './skills';
import Social from './social';

const UserPage = () => {
  return (
    <>
      <SimpleContainer>
        <AboutMe />
        <PersonalInfo></PersonalInfo>
        <Skills></Skills>
        <Experience></Experience>
        <Social></Social>
      </SimpleContainer>
    </>
  );
};

export default UserPage;

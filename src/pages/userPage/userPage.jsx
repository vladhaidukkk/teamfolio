import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import ComplexGrid from '../../components/muiComponents/ComplexGrid';
import SimpleContainer from '../../components/muiComponents/simpleContainer';
import TextRating from '../../components/muiComponents/starRating';
import Experience from './experiense';
import PersonalInfo from './personalInfo';
import Skills from './skills';
import Social from './social';

const UserPage = () => {
  const rating = [
    { id: 1, language: 'English', value: '3' },
    { id: 2, language: 'Spanish', value: '3' },
    { id: 3, language: 'Chinese', value: '4' },
  ];
  return (
    <>
      <SimpleContainer>
        <ComplexGrid>
          <AutoGridNoWrap message="About Me"></AutoGridNoWrap>
          {rating.map((val) => (
            <TextRating key={val.id} options={val}></TextRating>
          ))}
        </ComplexGrid>
        <PersonalInfo></PersonalInfo>
        <Skills></Skills>
        <Experience></Experience>
        <Social></Social>
      </SimpleContainer>
    </>
  );
};

export default UserPage;

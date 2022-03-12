import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import InteractiveList from '../../components/muiComponents/interactiveList';

const PersonalInfo = () => {
  const data = {
    name: 'David D. Harper',
    email: 'dummy@gmail.com',
    phone: '+415-347-7562',
    address: 'Table Rock, NE, USA',
    age: '26 Years Old',
    nationality: 'American',
  };
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="Personal info"></AutoGridNoWrap>
        <InteractiveList data={data}></InteractiveList>
      </BoxSx>
    </>
  );
};

export default PersonalInfo;

import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import InteractiveList from '../../components/muiComponents/interactiveList';
import PropTypes from 'prop-types';
const PersonalInfo = ({ years, name, email }) => {
  const data = {
    name: name,
    email: email,
    phone: '+415-347-7562',
    address: 'Table Rock, NE, USA',
    age: years + ' years old',
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
PersonalInfo.propTypes = {
  name: PropTypes.string,
  years: PropTypes.number,
  email: PropTypes.string,
};
export default PersonalInfo;

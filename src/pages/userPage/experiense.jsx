import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import PropTypes from 'prop-types';
import OutlinedCard from '../../components/muiComponents/simpleCard';

const Experience = ({ experience }) => {
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="Experience"></AutoGridNoWrap>
        <OutlinedCard data={experience} />
      </BoxSx>
    </>
  );
};
Experience.propTypes = {
  experience: PropTypes.string,
};
export default Experience;

import { Typography } from '@mui/material';
import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import ComplexGrid from '../../components/muiComponents/ComplexGrid';
import TextRating from '../../components/muiComponents/starRating';
const AboutMe = () => {
  const rating = [
    { id: 1, language: 'English', value: '3' },
    { id: 2, language: 'Spanish', value: '3' },
    { id: 3, language: 'Chinese', value: '4' },
  ];
  return (
    <>
      <ComplexGrid>
        <AutoGridNoWrap message="About Me"></AutoGridNoWrap>
        {rating.map((val) => (
          <TextRating key={val.id} options={val}></TextRating>
        ))}
      </ComplexGrid>{' '}
      <Typography sx={{ justifyContent: 'center', display: 'flex' }} variant="span">
        On this project : worked on
      </Typography>
    </>
  );
};

export default AboutMe;

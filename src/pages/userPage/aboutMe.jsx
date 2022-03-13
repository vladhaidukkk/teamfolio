import { Typography } from '@mui/material';
import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import ComplexGrid from '../../components/muiComponents/ComplexGrid';
import TextRating from '../../components/muiComponents/starRating';
import PropTypes from 'prop-types';
const AboutMe = ({ name, avatar, desc, role, languages }) => {
  return (
    <>
      <ComplexGrid name={name} avatar={avatar} desc={desc}>
        <AutoGridNoWrap message="About Me" />
        {languages.map((val) => (
          <TextRating key={val.label} options={val} />
        ))}
      </ComplexGrid>
      <Typography sx={{ justifyContent: 'center', display: 'flex' }} variant="span">
        Role in this project :{' '}
        {role
          ? role.map((roles) => (
              <Typography key={roles.label} sx={{ color: roles.color }}>
                {roles.label}
                {role[role.length - 1].label !== roles.label ? (
                  <span style={{ color: 'black' }}>{', '}</span>
                ) : (
                  ''
                )}
              </Typography>
            ))
          : 'none'}
      </Typography>
    </>
  );
};
AboutMe.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  desc: PropTypes.string,
  role: PropTypes.array,
  languages: PropTypes.array,
};
export default AboutMe;

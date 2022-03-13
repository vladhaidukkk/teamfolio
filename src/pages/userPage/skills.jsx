import { Box, Typography } from '@mui/material';
import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import CircularStatic from '../../components/muiComponents/progressBar';
import PropTypes from 'prop-types';
const Skills = ({ skills }) => {
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="My Skills"></AutoGridNoWrap>{' '}
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {skills.map((skill) => (
            <Box sx={{ marginBottom: '10px' }} key={skill.label}>
              <CircularStatic level={skill.value}></CircularStatic>
              <Typography>{skill.label}</Typography>
            </Box>
          ))}
        </Box>
      </BoxSx>
    </>
  );
};
Skills.propTypes = {
  skills: PropTypes.array,
};
export default Skills;

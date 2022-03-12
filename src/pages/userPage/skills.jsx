import { Box, Typography } from '@mui/material';
import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import CircularStatic from '../../components/muiComponents/progressBar';

const Skills = () => {
  const skills = [
    { skill: 'HTML & CSS', level: 80 },
    { skill: 'WORDPRESS', level: 70 },
    { skill: 'PHP', level: 90 },
    { skill: 'NODEJS', level: 85 },
  ];
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="My Skills"></AutoGridNoWrap>{' '}
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {skills.map((skill) => (
            <Box sx={{ marginBottom: '10px' }} key={skill.skill}>
              <CircularStatic level={skill.level}></CircularStatic>
              <Typography>{skill.skill}</Typography>
            </Box>
          ))}
        </Box>
      </BoxSx>
    </>
  );
};

export default Skills;

import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';

import OutlinedCard from '../../components/muiComponents/simpleCard';

const Experience = () => {
  const data = [
    {
      job: 'Microsoft',
      title: 'CEO',
      year: '2010-2015',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque ipsum sequi? Culpa distinctio ullam facilis cum omnis? Id vitae cum amet consequuntur earum repellat quam animi, mollitia possimus aut!',
    },
    {
      job: 'Facebook',
      title: 'Director',
      year: '2015-2016',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque ipsum sequi? Culpa distinctio ullam facilis cum omnis? Id vitae cum amet consequuntur earum repellat quam animi, mollitia possimus aut!',
    },
    {
      job: 'Amazon',
      title: 'Director',
      year: '2016-2019',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque ipsum sequi? Culpa distinctio ullam facilis cum omnis? Id vitae cum amet consequuntur earum repellat quam animi, mollitia possimus aut!',
    },
    {
      job: 'Street',
      title: 'Hobo',
      year: '2019...',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloremque ipsum sequi? Culpa distinctio ullam facilis cum omnis? Id vitae cum amet consequuntur earum repellat quam animi, mollitia possimus aut!',
    },
  ];
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="Experience"></AutoGridNoWrap>
        <OutlinedCard data={data} />
      </BoxSx>
    </>
  );
};

export default Experience;

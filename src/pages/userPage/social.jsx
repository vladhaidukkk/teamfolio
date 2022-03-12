import React from 'react';
import AutoGridNoWrap from '../../components/muiComponents/autoGridNoWrap';
import BoxSx from '../../components/muiComponents/box';
import ImageAvatars from '../../components/muiComponents/imageAvatars';
const Social = () => {
  return (
    <>
      <BoxSx>
        <AutoGridNoWrap message="My Social Links"></AutoGridNoWrap>
        <ImageAvatars></ImageAvatars>
      </BoxSx>
    </>
  );
};

export default Social;

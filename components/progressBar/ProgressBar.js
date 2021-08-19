/* eslint-disable prettier/prettier */
import React from 'react';
import * as S from './style.js';

const ProgressBar = ({
  width,
  backgroundColor,
  marginHorizontal,
  borderRadius,
  height,
  statusBackgroundColor,
  position,
  duration,
}) => {
  return (
    <S.ProgressBar
      width={width}
      backgroundColor={backgroundColor}
      marginHorizontal={marginHorizontal}
      borderRadius={borderRadius}>
      <S.ProgressBarStatus
        progress={position && duration ? (position / duration) * 100 : null}
        height={height}
        backgroundColor={statusBackgroundColor}
        borderRadius={borderRadius}
      />
    </S.ProgressBar>
  );
};

export default ProgressBar;

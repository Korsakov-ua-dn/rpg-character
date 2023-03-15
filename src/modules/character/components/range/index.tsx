import React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import './style.scss';

type PropsType = SliderProps;

export const Range: React.FC<PropsType> = React.memo((props) => {
  return (
    <div className="Range">
      <Slider {...props} />
    </div>
  );
});

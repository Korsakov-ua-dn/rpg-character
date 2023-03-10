import React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import './style.scss';

type PropsType = SliderProps;

const Range: React.FC<PropsType> = (props) => {
  return (
    <div className="Range">
      <Slider {...props} />
    </div>
  );
};

export default React.memo(Range) as typeof Range;

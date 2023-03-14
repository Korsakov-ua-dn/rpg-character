import React from 'react';

import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const BattleDisplay: React.FC<IProps> = React.memo(({ children }) => {
  return <div className="Battle-display">{children}</div>;
});

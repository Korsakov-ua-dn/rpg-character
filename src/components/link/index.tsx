import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

interface IProps {
  children: string;
  to: string;
}

export const Link: React.FC<IProps> = React.memo(({ children, to }) => {
  return (
    <NavLink className="Link" to={to}>
      {children}
    </NavLink>
  );
});

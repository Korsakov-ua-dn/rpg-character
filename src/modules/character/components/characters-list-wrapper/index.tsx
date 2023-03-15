import React from 'react';

import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const CharactersListWrapper: React.FC<IProps> = React.memo(
  ({ children }) => {
    return <div className="Characters-wrapper">{children}</div>;
  }
);

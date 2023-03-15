import React from 'react';

import './style.scss';

interface IProps {
  children: React.ReactNode[];
}

export const CharactersList: React.FC<IProps> = React.memo(({ children }) => {
  return <ul className="Characters-list">{children}</ul>;
});

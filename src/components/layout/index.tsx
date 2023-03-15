import React from 'react';
import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

export const Layout: React.FC<IProps> = React.memo((props) => {
  return <div className={'Layout'}>{props.children}</div>;
});

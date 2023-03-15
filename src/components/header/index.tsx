import React from 'react';

import { Layout } from '../layout';

import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Header: React.FC<IProps> = React.memo((props) => {
  return (
    <header className="Header">
      <Layout>
        <div className="Header__container">{props.children}</div>
      </Layout>
    </header>
  );
});

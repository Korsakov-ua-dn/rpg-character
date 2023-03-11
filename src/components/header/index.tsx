import React from 'react';

import Layout from '../layout';

import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Header: React.FC<IProps> = (props) => {
  return (
    <header className="Header">
      <Layout>{props.children}</Layout>
    </header>
  );
};

export default React.memo(Header) as typeof Header;

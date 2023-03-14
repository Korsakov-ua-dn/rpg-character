import React from 'react';

import Layout from '../../../../components/layout';

import './style.scss';

interface IProps {
  children: [React.ReactNode, React.ReactNode];
}

export const ControlsLayout: React.FC<IProps> = React.memo((props) => {
  return (
    <Layout>
      <div className="Controls-layout">{props.children}</div>
    </Layout>
  );
});

import React from 'react';

import Layout from '../layout';

import type { BattleSattus } from '../../modules/battle/battle-slice';

import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  status: BattleSattus;
}

export const BattleLayout: React.FC<IProps> = React.memo((props) => {
  return (
    <Layout>
      {props.status !== null && <div className="Battle-overlay" />}
      <div className="Battle-layout">{props.children}</div>
    </Layout>
  );
});

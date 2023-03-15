import React from 'react';

import { Layout } from '../../../../components/layout';

import type { BattleStatus } from '../../types';

import './style.scss';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  status: BattleStatus;
}

export const BattleLayout: React.FC<IProps> = React.memo((props) => {
  return (
    <Layout>
      <div className="Battle-layout">{props.children}</div>
      {props.status !== null && <div className="Battle-overlay" />}
    </Layout>
  );
});

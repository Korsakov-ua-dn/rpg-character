import React, { useLayoutEffect } from 'react';

import Header from '../../components/header';
import Layout from '../../components/layout';
import { Link } from '../../components/link';
import { useAppDispatch } from '../../hooks';
import { Battle } from '../../modules/battle';

export const Game: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    // dispatch();
  }, [dispatch]);

  return (
    <>
      <Header>
        <Link to="/">Меню</Link>
      </Header>
      <Layout>
        <Battle />
      </Layout>
    </>
  );
});

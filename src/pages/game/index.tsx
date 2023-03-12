import React from 'react';
import { Navigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { Link } from '../../components/link';
import { Battle } from '../../modules/battle';

export const Game: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    character: state.character.selected,
  }));

  if (!select.character) return <Navigate to="/" replace />;

  return (
    <>
      <Header>
        <Link to="/">Настройка</Link>
      </Header>
      <Layout>
        <Battle character={select.character} />
      </Layout>
    </>
  );
});

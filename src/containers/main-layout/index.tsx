import React from 'react';

import { Layout } from '../../components/layout';
import { useAppSelector } from '../../hooks';

interface IProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = React.memo((props) => {
  const select = useAppSelector((state) => ({
    loading: state.menu.loading,
    error: state.menu.error,
  }));

  return (
    <>
      {select.loading && <Layout>Загрузка информации...</Layout>}

      {select.error && <Layout>{select.error}</Layout>}

      {props.children}
    </>
  );
});

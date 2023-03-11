import React from 'react';

import Layout from '../../components/layout';
import { useAppSelector } from '../../hooks';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = (props) => {
  const select = useAppSelector((state) => ({
    loading: state.character.loading,
    error: state.character.error,
  }));

  return (
    <>
      {select.loading && <Layout>Загрузка информации...</Layout>}

      {select.error && <Layout>{select.error}</Layout>}

      {props.children}
    </>
  );
};

export default React.memo(MainLayout);

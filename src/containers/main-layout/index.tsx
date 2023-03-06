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
    <Layout>
      {select.loading && 'Загрузка информации...'}

      {select.error && select.error}
    </Layout>
  );
};

export default React.memo(MainLayout);

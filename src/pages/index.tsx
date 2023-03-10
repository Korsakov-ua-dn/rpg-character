import React, { useLayoutEffect } from 'react';

import MainLayout from '../containers/main-layout';
import { useAppDispatch } from '../hooks';
import { Character } from '../modules/character-controller';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    // dispatch();
  }, [dispatch]);

  return (
    <MainLayout>
      <Character />
    </MainLayout>
  );
};

export default React.memo(App) as typeof App;

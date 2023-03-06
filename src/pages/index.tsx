import React, { useLayoutEffect } from 'react';

import MainLayout from '../containers/main-layout';
import { useAppDispatch } from '../hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    // dispatch();
  }, [dispatch]);

  return (
    <MainLayout>
      <div>Start</div>
    </MainLayout>
  );
};

export default React.memo(App) as typeof App;

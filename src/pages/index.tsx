import React, { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '../containers/main-layout';
import { useAppDispatch } from '../hooks';

import { Controls } from './controls';
import { Game } from './game';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    // init App;
  }, [dispatch]);

  return (
    <MainLayout>
      <Routes>
        <Route path={'/'} element={<Controls />} />
        <Route path={'/game'} element={<Game />} />
      </Routes>
    </MainLayout>
  );
};

export default React.memo(App) as typeof App;

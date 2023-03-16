import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '../containers/main-layout';
import { preloadImages } from '../utils';

import { Controls } from './controls';
import { Game } from './game';

const App: React.FC = () => {
  useEffect(() => {
    preloadImages();
  }, []);

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

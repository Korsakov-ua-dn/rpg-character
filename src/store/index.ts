import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { menuReducer } from '../modules/menu';
import { battleReducer } from '../modules/battle';
import { popupsReducer } from '../modules/popups';

const rootReducer = combineReducers({
  menu: menuReducer,
  battle: battleReducer,
  popups: popupsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

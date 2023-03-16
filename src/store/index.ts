import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { menuReducer } from '../modules/menu';
import { battleReducer } from '../modules/battle';

const rootReducer = combineReducers({
  menu: menuReducer,
  battle: battleReducer,
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

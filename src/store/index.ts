import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { characterReducer } from '../modules/character';
import { battleReducer } from '../modules/battle';

const rootReducer = combineReducers({
  character: characterReducer,
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

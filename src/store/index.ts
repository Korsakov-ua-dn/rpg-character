import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { characterReducer } from '../modules/character';

const rootReducer = combineReducers({
  character: characterReducer,
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

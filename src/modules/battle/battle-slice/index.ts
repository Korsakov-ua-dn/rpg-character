import { createSlice } from '@reduxjs/toolkit';

type BattleState = {
  loading: boolean;
  error: string | null;
};

export const initialState: BattleState = {
  loading: false,
  error: null,
};

const BattleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {},
});

export const battleReducer = BattleSlice.reducer;

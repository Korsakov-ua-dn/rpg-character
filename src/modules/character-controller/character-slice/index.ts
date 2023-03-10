import { createSlice } from '@reduxjs/toolkit';

type CharacterState = {
  loading: boolean;
  error: string | null;
};

export const initialState: CharacterState = {
  loading: false,
  error: null,
};

const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
});

export const characterReducer = CharacterSlice.reducer;

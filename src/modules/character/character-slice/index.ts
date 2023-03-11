import { createSlice } from '@reduxjs/toolkit';

type CharacterState = {
  data: Character[];
  loading: boolean;
  error: string | null;
};

export const initialState: CharacterState = {
  data: [],
  loading: false,
  error: null,
};

const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addCharacter(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const characterActions = CharacterSlice.actions;
export const characterReducer = CharacterSlice.reducer;

export interface Character {
  id: string;
  name: string;
  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
}

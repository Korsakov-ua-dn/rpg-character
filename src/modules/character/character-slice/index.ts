import { createSlice } from '@reduxjs/toolkit';

type CharacterState = {
  data: Character[];
  selected: Character | null;
  loading: boolean;
  error: string | null;
};

export const initialState: CharacterState = {
  data: [],
  selected: null,
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
    setCharacter(state, action) {
      state.selected = action.payload;
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

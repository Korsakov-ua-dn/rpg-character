import { createSlice } from '@reduxjs/toolkit';

import { upgradeCharacterSkill } from '../../../utils';

import { battleActions } from '../../battle';

import type { Character } from '../types';

type CharacterState = {
  data: Character[];
  selected: Character | null;
  loading: boolean;
  error: string | null;
};

const initialState: CharacterState = {
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
  extraReducers: {
    [battleActions.takeDamageEnemy.type]: (state) => {
      if (!state.selected) return;

      state.selected = upgradeCharacterSkill(state.selected, 1);
      state.data = state.data.map((item) =>
        item.id === state.selected?.id ? state.selected : item
      );
    },
  },
});

export const characterActions = CharacterSlice.actions;
export const characterReducer = CharacterSlice.reducer;

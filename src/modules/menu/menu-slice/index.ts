import { createSlice } from '@reduxjs/toolkit';

import { upgradeCharacterSkill } from '../../../utils';

import { battleActions } from '../../battle';

import type { Character } from '../types';

type MenuState = {
  characters: Character[];
  selected: Character | null;
  loading: boolean;
  error: string | null;
};

const initialState: MenuState = {
  characters: [],
  selected: null,
  loading: false,
  error: null,
};

const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addCharacter(state, action) {
      state.characters.push(action.payload);
    },
    setCharacter(state, action) {
      state.selected = action.payload;
    },
  },
  extraReducers: {
    [battleActions.takeDamageEnemy.type]: (state) => {
      if (!state.selected) return;

      state.selected = upgradeCharacterSkill(state.selected, 1);
      state.characters = state.characters.map((item) =>
        item.id === state.selected?.id ? state.selected : item
      );
    },
  },
});

export const menuActions = MenuSlice.actions;
export const menuReducer = MenuSlice.reducer;

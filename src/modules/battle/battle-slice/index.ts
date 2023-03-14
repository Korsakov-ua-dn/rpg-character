import { createSlice } from '@reduxjs/toolkit';

import { createCharacter } from '../../../utils/create-character';

import type { Character } from '../../character/character-slice';

type BattleState = {
  character: Character | null;
  enemy: Character | null;
  status: BattleSattus;
};

export const initialState: BattleState = {
  character: null,
  enemy: null,
  status: null,
};

const BattleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    setCharacter(state, action) {
      state.character = action.payload;
      state.enemy = createCharacter({
        name: 'Враг',
        power: 7,
        dexterity: 2,
        intelligence: 0,
        charisma: 1,
      });
      state.status = null;
    },
    takeDamageCharacter(state) {
      if (state.character && state.enemy && state.character.health > 0) {
        state.character.health -= 1;
        state.enemy.damage += 1;
      }
      if (state.character && state.character.health === 0) {
        state.status = 'lose';
      }
    },
    takeDamageEnemy(state) {
      if (state.character && state.enemy && state.enemy.health > 0) {
        state.enemy.health -= 1;
        state.character.damage += 1;
      }
      if (state.enemy && state.enemy.health === 0) {
        state.status = 'win';
      }
    },
  },
});

export const battleActions = BattleSlice.actions;
export const battleReducer = BattleSlice.reducer;

//types
export type BattleSattus = 'win' | 'lose' | null;

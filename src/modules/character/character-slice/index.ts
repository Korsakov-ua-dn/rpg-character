import { createSlice } from '@reduxjs/toolkit';

import { upgradeCharacterSkill } from '../../../utils/upgrade-character-skill';

import { battleActions } from '../../battle';

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

export interface Character extends BaseCharacterSettings {
  id: string;
  lifeForce: { title: 'Жизненная сила'; value: number };
  evasion: { title: 'Уклонение'; value: number };
  energy: { title: 'Энергичность'; value: number };
  skills: [
    { title: 'Атака'; value: number; maxValue: number },
    { title: 'Стелс'; value: number; maxValue: number },
    { title: 'Стрельба из лука'; value: number; maxValue: number },
    { title: 'Обучаемость'; value: number; maxValue: number },
    { title: 'Выживание'; value: number; maxValue: number },
    { title: 'Медицина'; value: number; maxValue: number },
    { title: 'Запугивание'; value: number; maxValue: number },
    { title: 'Проницательность'; value: number; maxValue: number },
    { title: 'Внешний вид'; value: number; maxValue: number },
    {
      title: 'Манипулирование';
      value: number;
      maxValue: number;
    }
  ];
  level: Level;
  damage: number;
  health: number;
}

export interface BaseCharacterSettings {
  name: string;
  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
}

export type Level = 0 | 1 | 2 | 3 | 4 | 5;

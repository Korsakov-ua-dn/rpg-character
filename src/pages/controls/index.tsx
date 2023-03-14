import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/button';
import { ControlsLayout } from '../../components/controls-layout';
import Header from '../../components/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { battleActions } from '../../modules/battle';
import {
  AddCharacterForm,
  CharactersList,
  characterActions,
} from '../../modules/character';

import { createCharacter } from '../../utils/create-character';

import type {
  BaseCharacterSettings,
  Character,
} from '../../modules/character/character-slice';

export const Controls: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const select = useAppSelector((state) => ({
    characters: state.character.data,
    selected: state.character.selected,
  }));

  const callbacks = {
    addCharacter: useCallback(
      (values: BaseCharacterSettings) => {
        const character = createCharacter(values);
        dispatch(characterActions.addCharacter(character));
      },
      [dispatch]
    ),
    selectCharacter: useCallback(
      (character: Character) => {
        dispatch(characterActions.setCharacter(character));
      },
      [dispatch]
    ),
    goToBattle: useCallback(() => {
      dispatch(battleActions.setCharacter(select.selected));
      navigate('/game');
    }, [dispatch, navigate, select.selected]),
  };

  return (
    <>
      <Header>
        <Button>Скачать</Button>
        <Button>Загрузить</Button>
      </Header>
      <ControlsLayout>
        <CharactersList
          characters={select.characters}
          selected={select.selected}
          selectCharacter={callbacks.selectCharacter}
          goToBattle={callbacks.goToBattle}
        />
        <AddCharacterForm addCharacter={callbacks.addCharacter} />
      </ControlsLayout>
    </>
  );
});

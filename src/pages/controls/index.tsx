import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/button';
import { ControlsLayout } from '../../components/controls-layout';
import Header from '../../components/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  AddCharacterForm,
  CharactersList,
  characterActions,
} from '../../modules/character';
import { Character } from '../../modules/character/character-slice';

export const Controls: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const select = useAppSelector((state) => ({
    characters: state.character.data,
    selected: state.character.selected,
  }));

  const callbacks = {
    addCharacter: useCallback(
      (character: Character) => {
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
      navigate('/game');
    }, [navigate]),
  };

  return (
    <>
      <Header>
        <Button>Скачать персонаж</Button>
        <Button>Загрузить персонаж</Button>
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

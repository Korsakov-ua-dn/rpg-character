import React, { useCallback } from 'react';

import { ControlsLayout } from '../../components/controls-layout';
import Header from '../../components/header';
import { Link } from '../../components/link';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  AddCharacterForm,
  CharactersList,
  characterActions,
} from '../../modules/character';
import { Character } from '../../modules/character/character-slice';

export const Controls: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    characters: state.character.data,
  }));

  const callbacks = {
    addCharacter: useCallback(
      (character: Character) => {
        dispatch(characterActions.addCharacter(character));
      },
      [dispatch]
    ),
  };

  return (
    <>
      <Header>
        <Link to="/">Settings</Link>
      </Header>
      <ControlsLayout>
        <CharactersList characters={select.characters} />
        <AddCharacterForm addCharacter={callbacks.addCharacter} />
      </ControlsLayout>
    </>
  );
});

import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../components/button';
import { ControlsLayout } from '../../modules/character/components/controls-layout';
import { Header } from '../../components/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { battleActions } from '../../modules/battle';
import { createCharacter } from '../../utils/create-character';
import {
  AddCharacterForm,
  CharactersList,
  CharactersListItem,
  CharactersListWrapper,
  characterActions,
} from '../../modules/character';

import type {
  BaseCharacterSettings,
  Character,
} from '../../modules/character/types';

export const Controls: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); //@todo check rerender

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
    onSelectCharacter: useCallback(
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

  const characters = useMemo(() => {
    return select.characters.map((character: Character, i: number) => {
      return (
        <CharactersListItem
          key={i}
          i={i}
          character={character}
          selected={character === select.selected}
          onSelectCharacter={callbacks.onSelectCharacter}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callbacks.onSelectCharacter, select.characters, select.selected]);

  return (
    <>
      <Header>
        <Button disabled={!select.selected}>Скачать</Button>
        <Button>Загрузить</Button>
      </Header>

      <ControlsLayout>
        <CharactersListWrapper>
          <CharactersList>{characters}</CharactersList>

          {!!select.characters.length && (
            <Button disabled={!select.selected} onClick={callbacks.goToBattle}>
              В бой
            </Button>
          )}
        </CharactersListWrapper>

        <AddCharacterForm addCharacter={callbacks.addCharacter} />
      </ControlsLayout>
    </>
  );
});

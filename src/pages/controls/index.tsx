import React, { useCallback, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';
import { v1 } from 'uuid';

import { Button } from '../../components/button';
import { ControlsLayout } from '../../modules/menu/components/controls-layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { battleActions } from '../../modules/battle';
import {
  createCharacter,
  downloadCharacter,
  isCharacter,
  jsonUploadInput,
} from '../../utils';
import { Header } from '../../components/header';
import {
  AddCharacterForm,
  CharactersList,
  CharactersListItem,
  CharactersListWrapper,
  menuActions,
} from '../../modules/menu';

import type {
  BaseCharacterSettings,
  Character,
} from '../../modules/menu/types';

export const Controls: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const select = useAppSelector((state) => ({
    characters: state.menu.characters,
    selected: state.menu.selected,
  }));

  // мемоизация динамически генерируемых колбэков
  const onDownloadRef = useRef(() => downloadCharacter(select.selected));
  onDownloadRef.current = () => downloadCharacter(select.selected);

  const goToBattleRef = useRef(() => {
    dispatch(battleActions.setCharacter(select.selected));
  });
  goToBattleRef.current = () => {
    dispatch(battleActions.setCharacter(select.selected));
  };

  const callbacks = {
    addCharacter: useCallback(
      (values: BaseCharacterSettings) => {
        const character = createCharacter(values);
        dispatch(menuActions.addCharacter(character));
      },
      [dispatch]
    ),

    onSelectCharacter: useCallback(
      (character: Character) => {
        dispatch(menuActions.setCharacter(character));
      },
      [dispatch]
    ),

    goToBattle: useCallback(() => {
      goToBattleRef.current();
      navigate('/game');
    }, [navigate]),

    onDownloadCharacter: useCallback(() => {
      onDownloadRef.current();
    }, []),

    uploadCharacterHandler: useCallback(async () => {
      const jsonFile = await jsonUploadInput();
      if (typeof jsonFile !== 'string') return;

      const data = JSON.parse(jsonFile);
      if (isCharacter(data)) {
        // перезатираю id для того что бы не было двух одинаковых персонажей
        dispatch(menuActions.addCharacter({ ...data, id: v1() }));
      }
    }, [dispatch]),
  };

  // в данный момент мемоизация characters избыточна (с заделом на будущее)
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
        <Button
          disabled={!select.selected}
          onClick={callbacks.onDownloadCharacter}
        >
          Скачать
        </Button>
        <Button onClick={callbacks.uploadCharacterHandler}>Загрузить</Button>
      </Header>

      <ControlsLayout>
        <AddCharacterForm addCharacter={callbacks.addCharacter} />

        {!!select.characters.length && (
          <CharactersListWrapper>
            <CharactersList>{characters}</CharactersList>

            <Button disabled={!select.selected} onClick={callbacks.goToBattle}>
              В бой
            </Button>
          </CharactersListWrapper>
        )}
      </ControlsLayout>
    </>
  );
});

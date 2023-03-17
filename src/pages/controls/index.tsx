import React, { useCallback, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';
import { v1 } from 'uuid';

import { Button } from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { battleActions } from '../../modules/battle';
import {
  createCharacter,
  downloadCharacter,
  editCharacter,
  isCharacter,
  jsonUploadInput,
} from '../../utils';
import { Header } from '../../components/header';
import {
  ControlsLayout,
  CharacterForm,
  CharactersList,
  CharactersListItem,
  CharactersListWrapper,
  menuActions,
} from '../../modules/menu';

import { popupsActions } from '../../modules/popups';
import { POPUPS } from '../../modules/popups/types';

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

  // мемоизация динамически генерируемых колбэков >>
  const onDownloadRef = useRef(() => downloadCharacter(select.selected));
  onDownloadRef.current = () => downloadCharacter(select.selected);

  const goToBattleHandler = () => {
    if (select.selected !== null) {
      dispatch(battleActions.setCharacter(select.selected));
    }
  };
  const goToBattleRef = useRef(goToBattleHandler);
  goToBattleRef.current = goToBattleHandler;
  // <<

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

    onEditCharacter: useCallback(
      (character: Character) => {
        // Создаем объект модального окна
        const popupObj = {
          name: POPUPS.editCharacter,
          onClose: (values?: BaseCharacterSettings) => {
            dispatch(popupsActions.close(popupObj));
            values &&
              dispatch(
                menuActions.editCharacter(editCharacter(values, character.id))
              );
          },
          character,
        };
        dispatch(popupsActions.open(popupObj));
      },
      [dispatch]
    ),
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
          onEditCharacter={callbacks.onEditCharacter}
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
        <CharacterForm
          onSubmit={callbacks.addCharacter}
          actionTitle="Добавить персонаж"
        />

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

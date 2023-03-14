import React from 'react';

import { Button } from '../../../../components/button';

import { CharactersListItem } from '../characters-list-item';

import type { Character } from '../../types';

import './style.scss';

interface IProps {
  characters: Character[];
  selected: Character | null;
  selectCharacter: (character: Character) => void;
  goToBattle: () => void;
}

export const CharactersList: React.FC<IProps> = React.memo(
  ({ characters, selected, selectCharacter, goToBattle }) => {
    return (
      <div className="Characters-wrapper">
        <ul className="Characters-list">
          {characters.map((character, i) => (
            <CharactersListItem
              key={i}
              i={i}
              character={character}
              selected={character === selected}
              selectCharacter={selectCharacter}
            />
          ))}
        </ul>

        {!!characters.length && (
          <Button disabled={!selected} onClick={goToBattle}>
            В бой
          </Button>
        )}
      </div>
    );
  }
);

import React from 'react';

import type { Character } from '../../types';

import './style.scss';

interface IProps {
  i: number;
  character: Character;
  selected: boolean;
  selectCharacter: (character: Character) => void;
}

export const CharactersListItem: React.FC<IProps> = React.memo(
  ({ i, character, selected, selectCharacter }) => {
    const classN = `Characters-list__item ${selected ? 'selected' : ''}`;
    return (
      <li className={classN} onClick={() => selectCharacter(character)}>
        <span>
          {i + 1}. {character.name}
        </span>
      </li>
    );
  }
);

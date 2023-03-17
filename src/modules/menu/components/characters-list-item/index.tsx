import React from 'react';

import type { Character } from '../../types';

import './style.scss';

interface IProps {
  i: number;
  character: Character;
  selected: boolean;
  onSelectCharacter: (character: Character) => void;
  onEditCharacter: (character: Character) => void;
}

export const CharactersListItem: React.FC<IProps> = React.memo(
  ({ i, character, selected, onSelectCharacter, onEditCharacter }) => {
    const classN = `Characters-list__item ${selected ? 'selected' : ''}`;
    return (
      <li className={classN}>
        <span onClick={() => onSelectCharacter(character)}>
          {i + 1}. {character.name}
        </span>

        <svg
          onClick={() => onEditCharacter(character)}
          className="Characters-list__edit-item"
          width="26px"
          height="26px"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14"
            stroke="#d8d8d8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </li>
    );
  }
);

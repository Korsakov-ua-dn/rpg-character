import React from 'react';

import { Character } from '../../character-slice';

interface IProps {
  characters: Character[];
}

export const CharactersList: React.FC<IProps> = React.memo((props) => {
  return (
    <ul style={{ width: '100%' }}>
      {props.characters.map((character, i) => (
        <li style={{ width: '100%' }} key={character.id}>
          {i + 1}. {character.name}
        </li>
      ))}
    </ul>
  );
});

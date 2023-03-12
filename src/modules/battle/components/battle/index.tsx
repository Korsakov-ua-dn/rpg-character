import React from 'react';

import Image from '../../../../assets/images/character.png';
import { Character } from '../../../character/character-slice';

interface IProps {
  character: Character;
}

export const Battle: React.FC<IProps> = React.memo(({ character }) => {
  return (
    <div className="Battle">
      <span>Имя: {character.name}</span>
      <br />
      <span>Сила: {character.power}</span>
      <img src={Image} alt="" width={400} height={400} />
    </div>
  );
});
